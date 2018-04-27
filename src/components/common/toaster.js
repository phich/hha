import { Position, Toaster,Classes,Intent } from "@blueprintjs/core";
 

export const AppToasterSuccess = Toaster.create({
    className: "recipe-toaster",
    position: Position.TOP,
});


export const AppToasterError = Toaster.create({
    icon :"warning-sign",
    className: "pt-intent-danger",
    position: Position.TOP,
});
