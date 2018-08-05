using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace ChintanPatel_Portfolio
{
    public partial class Registration_Form : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        protected void btnRegistration_Click(object sender, EventArgs e)
        {

            ScriptManager.RegisterClientScriptBlock(this, this.GetType(), "alertMessage", "alert( ' " + txtFirstName.Text + "  " + txtLastName.Text + " Thanks for registering with our website, your record was created successfully')", true);

            txtFirstName.Text = "";
            txtLastName.Text = "";
            txtEmail.Text = "";
            txtAge.Text = "";
            txtAddress.Text = "";
            txtAlterEmail.Text = "";
            txtCity.Text = "";
            txtConPassword.Text = "";
            txtPassword.Text = "";
            txtPostalCode.Text = "";
            txtProvince.Text = "";
            txtPhone.Text = "";

        }
        protected void txtProvince_TextChanged(object sender, EventArgs e)
        {
            txtProvince.Text = txtProvince.Text.ToUpper();
        }

        protected void btnreset_Click(object sender, EventArgs e)
        {
            txtFirstName.Text = "";
            txtLastName.Text = "";
            txtEmail.Text = "";
            txtAge.Text = "";
            txtAddress.Text = "";
            txtAlterEmail.Text = "";
            txtCity.Text = "";
            txtConPassword.Text = "";
            txtPassword.Text = "";
            txtPostalCode.Text = "";
            txtProvince.Text = "";
            txtPhone.Text = "";
        }
    }
}