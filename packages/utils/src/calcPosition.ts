export type Side = "top" | "bottom" | "left" | "right";
export type Align = "start" | "center" | "end";

const OPPOSITES = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left",
} as const;

const NEXT_SIDES = {
    top: "right",
    right: "bottom",
    bottom: "left",
    left: "top",
} as const;

export function calculatePosition(
    anchor: HTMLElement,
    content: HTMLElement,
    side: Side,
    align: Align,
    avoidCollisions: boolean = true
) {
    const anchorRect = anchor.getBoundingClientRect();
    const contentRect = content.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Add scroll offsets
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    function calculateInitialPosition(currentSide: Side, currentAlign: Align) {
        let top = 0;
        let left = 0;

        // Calculate position based on side WITH scroll offsets
        switch (currentSide) {
            case "top":
                top = anchorRect.top - contentRect.height + scrollY;
                left = anchorRect.left + scrollX;
                break;
            case "bottom":
                top = anchorRect.bottom + scrollY;
                left = anchorRect.left + scrollX;
                break;
            case "left":
                top = anchorRect.top + scrollY;
                left = anchorRect.left - contentRect.width + scrollX;
                break;
            case "right":
                top = anchorRect.top + scrollY;
                left = anchorRect.right + scrollX;
                break;
        }

        // Calculate alignment
        if (currentSide === "top" || currentSide === "bottom") {
            switch (currentAlign) {
                case "start":
                    break;
                case "center":
                    left = anchorRect.left + scrollX + (anchorRect.width - contentRect.width) / 2;
                    break;
                case "end":
                    left = anchorRect.right + scrollX - contentRect.width;
                    break;
            }
        } else {
            switch (currentAlign) {
                case "start":
                    break;
                case "center":
                    top = anchorRect.top + scrollY + (anchorRect.height - contentRect.height) / 2;
                    break;
                case "end":
                    top = anchorRect.bottom + scrollY - contentRect.height;
                    break;
            }
        }

        return { top, left };
    }

    function checkSideCollision(position: { top: number; left: number }, currentSide: Side) {
        switch (currentSide) {
            case "top":
                return position.top < scrollY;
            case "bottom":
                return position.top + contentRect.height > scrollY + viewportHeight;
            case "left":
                return position.left < scrollX;
            case "right":
                return position.left + contentRect.width > scrollX + viewportWidth;
        }
    }

    // If no collision checking is needed, return initial position
    if (!avoidCollisions) {
        return calculateInitialPosition(side, align);
    }

    let position = calculateInitialPosition(side, align);
    const collision = checkSideCollision(position, side);

    if (collision) {
        // Try opposite side first
        const oppositeSide = OPPOSITES[side];
        const oppositePosition = calculateInitialPosition(oppositeSide, align);
        const oppositeCollision = checkSideCollision(oppositePosition, side);

        if (!oppositeCollision) {
            position = oppositePosition;
        } else {
            // Try other sides clockwise
            let currentSide = NEXT_SIDES[side];
            let attempts = 0;

            while (attempts < 3) {
                const newPosition = calculateInitialPosition(currentSide, align);
                const newCollision = checkSideCollision(newPosition, side);

                if (!newCollision) {
                    position = newPosition;
                    break;
                }

                currentSide = NEXT_SIDES[currentSide];
                attempts++;
            }
        }
    }

    return position;
}