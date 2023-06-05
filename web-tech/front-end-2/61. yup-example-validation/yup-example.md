# yup conditional validation example

Here's an example of a Yup validation logic where the first input field is optional but, if filled, it must contain only alphabetic characters, and the second input field is required:
<br /><br />

<pre>
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstField: Yup.string().matches(/^[A-Za-z]*$/, {
    message: "First field must contain only alphabetic characters",
    excludeEmptyString: true,
  }),
  secondField: Yup.string().when("firstField", {
    is: (value) => value && value.length > 0,
    then: Yup.string().required(
      "Second field is required when first field is filled"
    ),
  }),
});

export default validationSchema;
</pre>

<br /><br />
In the updated code, we're using the <span class="code">matches</span> method from Yup to enforce that the <span class="code">firstField</span> must contain only alphabetic characters. The regular expression checks if the string consists only of uppercase and lowercase letters. The <span class="code">excludeEmptyString</span> option is set to <span class="code">true</span> to ensure that an empty string is not considered a valid value for the first field.
<br /><br />
If the <span class="code">firstField</span> is filled, the <span class="code">secondField</span> is still required using the <span class="code">when</span> method. This means that the second input field will be required only when the first input field is filled, and it will not be required if the first field is left empty.
<br /><br />
By implementing this validation logic, you can have an optional first input field that, if filled, must contain only alphabetic characters, and a second input field that is required when the first field is filled.
<br /><br />
