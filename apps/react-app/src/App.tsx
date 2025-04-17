import { Button as NewButton } from "@rds/react-button";
import { Dialog as NewDialog } from "@rds/react-dialog";
import "@rocketcentral/rocket-design-system-react";

import { Button as LegacyButton } from "@mui/material";

import "./global.css";
import "./legacy.scss";

const App = () => {
  return (
    <div>
      <h1 className="mx-auto text-center text-2xl font-bold my-10">
        Comparing Legacy RDS and New RDS prototype
      </h1>
      <div className="grid grid-cols-2 gap-4 [&>div]:p-4 [&>div]:gap-5 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&_h2]:text-lg [&_h2]:font-bold">
        <div>
          <h2>Legacy RDS</h2>
          <LegacyButton
            variant="contained"
            disableElevation
            classes={{
              root: "rkt-Button",
            }}
          >
            Button
          </LegacyButton>
        </div>
        <div>
          <h2>New RDS</h2>
          {/* Button */}
          <NewButton>Button</NewButton>

          {/* Dialog */}
          <NewDialog.Root modal>
            <NewDialog.Trigger>Open modal</NewDialog.Trigger>
            <NewDialog.Content>
              <NewDialog.Title>Modal title</NewDialog.Title>
              <p className="mb-4">Modal description</p>
              <NewDialog.Close className="ml-auto">Close</NewDialog.Close>
            </NewDialog.Content>
          </NewDialog.Root>
        </div>
      </div>
    </div>
  );
};

export default App;
