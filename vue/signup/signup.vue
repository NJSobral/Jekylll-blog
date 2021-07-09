<template>
  <div class="wrapper">
    <h1 class="batta">Vee-Validate 4.0.0</h1>
    <!-- <Form @submit="onSubmit" class="form mt-5">
            <h2>Field level Validation</h2>
            <div class="container">
                <h3>Basic Validation</h3>
                <label name="name">Username</label>
                <Field class="input mx-4" name="name" type="text" placeholder="who are you" :rules="isRequired"/>
                <ErrorMessage name="name" class="error mx-2"></ErrorMessage>
                </div>
            <br>
            <div class="container">
                <h3>Validation with yup</h3> 
                <label  name="password">Password</label>
                <Field class="input my-3 mx-4" name="password" type="text" placeholder="password" :rules="passwordRules"/>
                <ErrorMessage class="error mx-2" name="password"></ErrorMessage>
            </div>
            <br>
            <button class="btn btn-primary btn-lg mx-5 my-4" type="submit">submit</button>
        </Form>
        <br> -->
    <h2>Form level Validation</h2>
    <div class="container">
      <Form @submit="onSubmit" :validation-schema="simpleSchema">
        <h2>Simpleschema</h2>
        <label name="email">Email</label>
        <Field class="input mx-5" name="email"></Field>
        <ErrorMessage name="email"></ErrorMessage>
        <br />
        <label name="password">Password</label>
        <Field class="input my-3 mx-4" name="password"></Field>
        <ErrorMessage class="error mx-2" name="password"></ErrorMessage>
        <br />
        <button class="btn btn-primary btn-lg mx-5 my-4" type="submit">
          submit
        </button>
      </Form>
    </div>
    <div class="container">
      <Form @submit="submit" :validation-schema="reactiveschema">
        <h2>yup schema</h2>
        <label name="email">Email</label>
        <Field class="input mx-5" name="email"></Field>
        <ErrorMessage class="error mx-2" name="email"></ErrorMessage>
        <br />
        <label name="password">Password</label>
        <Field class="input my-3 mx-4" name="password"></Field>
        <ErrorMessage class="error mx-2" name="password"></ErrorMessage>
        <br />
        <button class="btn btn-primary btn-lg mx-5 my-4" type="submit">
          submit
        </button>
      </Form>
    </div>
    <!-- Listen to all events, this is the default behavior
    <Field v-slot="{ field }">
      <input v-bind="field" />
    </Field>-->

    <!-- Only validate when the change event is dispatched -->
    <!--<Field v-slot="{ field, handleChange }">
      <input @change="handleChange" :value="field.value" />
    </Field> -->
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const simpleSchema = {
      email(value) {
        // if the field is empty
        if (!value) {
          return "This field is required";
        }

        // if the field is not a valid email
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          return "This field must be a valid email";
        }

        // All is good
        return true;
      },
      name(value) {
        if (value && value.trim()) return true;
        return "this field is required";
      },
      password(value) {
        if (!value) {
          return "this field is required";
        }

        if (typeof value === "string" && value.length < 8) {
          return "Password must be at least 8 characters";
        }
        if (typeof value === "string" && value.length >= 8) return true;
      },
    };
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });
    return {
      passwordRules: yup.string().required().min(8),
      simpleSchema,
      schema,
    };
  },
  methods: {
    isRequired(value) {
      if (value && value.trim()) return true;
      return "this is required";
    },
    onSubmit(values) {
      alert(JSON.stringify(values, null, 2));
    },
  },
  computed: {
    reactiveschema() {
      return yup.object({
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
      });
    },
  },
};
</script>

<style scoped>
</style>