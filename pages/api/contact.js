const contact = (req, res) => {
  const body = JSON.parse(req.body);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.HOST2,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.EMAIL2,
      pass: process.env.PASSWORD2,
    },
  });

  transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
  });

  let mail1Options = {
    from: process.env.EMAIL2,
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
    from: process.env.EMAIL2,
    to: [body.email],
    subject: `Contact request for Varad Rajopadhye`,
    text: `
        Hi ${body.name},
        We recieved a contact request from on varadrajopadhye.tech\n
        Thanks for the enquiry. Varad will get in touch with you soon.
        
        Thanks and Regards,
        Contact Team (Varad Rajopadhye)
        `,
  };

  transporter.sendMail(mail1Options, function (err, data) {
    if (err) {
      console.log("Error " + err);
      res.send({msg:err})
    } else {
      transporter.sendMail(mail2Options, function (err2, data2) {
        if (err2) {
          console.log("Error " + err2);
          res.send({msg:err2})
        } else {
          res.send(({msg:{1:data,2:data2}}))
        }
      });
    }
  });

}

export default contact;