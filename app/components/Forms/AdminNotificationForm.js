import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const NotificationForm = ({ onSendNotification }) => {
  return (
    <Paper style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Send Notification
      </Typography>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const notificationData = {
            id: Date.now(),
            title: values.title,
            description: values.description,
            time: new Date().toLocaleString(),
          };

          console.log("Notification Sent:", notificationData);

          if (onSendNotification) {
            onSendNotification(notificationData);
          }

          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="title"
                  as={TextField}
                  label="Notification Title"
                  fullWidth
                  error={touched.title && !!errors.title}
                  helperText={touched.title && errors.title}
                />
              </Grid>

              <Grid item xs={12}>
                <Field
                  name="description"
                  as={TextField}
                  label="Notification Description"
                  fullWidth
                  multiline
                  rows={3}
                  error={touched.description && !!errors.description}
                  helperText={touched.description && errors.description}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Notification
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default NotificationForm;
