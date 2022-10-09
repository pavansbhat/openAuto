import {
  StyledInput,
  StyledHelperText,
  StyledInputContainer,
} from "./input.styles";

export const Input = ({
  placeholder,
  name,
  errors,
  validations,
  register,
}) => {
  return (
    <StyledInputContainer>
      <StyledInput
        type="text"
        placeholder={placeholder}
        name={name}
        {...register(name,{...validations})}
        isError={errors && errors[name]}
      />
      {errors && errors[name] && <StyledHelperText>{errors[name].message}</StyledHelperText>}
    </StyledInputContainer>
  );
};
