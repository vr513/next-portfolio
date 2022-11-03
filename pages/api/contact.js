export default function (req, res) {
  const body = req.body
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      host: "smtp.gmail.com",
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });

  let mail1Options = {
    from: process.env.EMAIL,
    to: [process.env.EMAIL],
    subject: `Contact request from ${body.name} email-${body.email}`,
    text: `
        Hi Varad,
        
        PFA contact request recieved on varadrajopdhye.tech.
        Details are as follows
        
        name:  ${body.name},  
        email: ${body.email},
        reason for contact: ${body.reason},
        
        Thanks
        `,
  };
  let mail2Options = {
    from: process.env.EMAIL,
    to: [body.email],
    subject: `Contact request for Varad Rajopadhye`,
    text: `Hi ${body.name},
        We recieved a contact request from on varadrajopadhye.tech\n
        Thanks for the enquiry. Varad will get in touch with you soon.
        
        Thanks and Regards,
        Contact Team (Varad Rajopadhye)
        `,
  };

  transporter.sendMail(mail1Options, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email1 sent successfully");
    }
  });

  transporter.sendMail(mail2Options, function (err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email2 sent successfully");
    }
  });

  res.send({ msg: "success" });
}
