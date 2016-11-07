// nodemailer setup
import nodemailer from "nodemailer";

import SMTP_CONFIG from "../config/email_config";
import validate from "../../shared/validate/msg";

const msg = () => ({
  send: (req, res, next) => {
    const transporter = nodemailer.createTransport(SMTP_CONFIG);
    const { errors, isValid } = validate(req.body);

    if(isValid) {
      let mailOptions = {
        from: req.body.email,
        to: "solly0702@gmail.com",
        subject: req.body.reason,
        text: req.body.msg,
        html: `<h2>Name: ${req.body.firstName} ${req.body.lastName}</h2>
              <h3>Email: ${req.body.email}</h3>
              <h3>Title: ${req.body.reason}</h3>
              <h4>Message: ${req.body.msg}</h4>`
      };

      transporter.sendMail(mailOptions)
      .then( data => res.json({ success: true }))
      .catch( err => res.status(500).json({ error: err }))
    } else {
      res.status(400).json(errors);
    }

  }
})

export default msg();
