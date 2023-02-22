import React from "react";
import { IMaskInput } from "react-imask";
import { TextFieldElement } from "react-hook-form-mui";
const MaskedInput = (props) => {
    const { mask, ...otherProps } = props;

    const MaskCustom = React.forwardRef(function MaskCustom(props, ref) {
        return <IMaskInput {...props} mask={mask} inputRef={ref} />;
    });

    return (
        <TextFieldElement
            {...otherProps}
            InputProps={{
                inputComponent: MaskCustom,
            }}
        />
    );
};

export default MaskedInput;