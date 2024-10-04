export const mergeProps = (
  slotProps: Record<string, unknown>,
  childProps: Record<string, unknown>
): Record<string, unknown> => {
  const output = { ...slotProps, ...childProps };

  Object.entries(slotProps).forEach(([key, slotPropValue]) => {
    const childPropValue = childProps[key];

    if (key === 'style') {
      output[key] = {
        ...(slotPropValue as Record<string, unknown>),
        ...(childPropValue as Record<string, unknown>),
      };
    } else if (key === 'className') {
      output[key] = [slotPropValue, childPropValue].filter(Boolean).join(' ');
    } else if (key.startsWith('on')) {
      output[key] = (...args: unknown[]) => {
        if (typeof childPropValue === 'function') {
          childPropValue(...args);
        }
        if (typeof slotPropValue === 'function') {
          slotPropValue(...args);
        }
      };
    }
  });

  return output;
};
