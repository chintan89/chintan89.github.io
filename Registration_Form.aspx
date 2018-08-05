<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Registration_Form.aspx.cs" Inherits="ChintanPatel_Portfolio.Registration_Form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Chintan Patel - Registration Form </title>
    <link href="Content/Registration.css" rel="stylesheet" />

    <style type="text/css">
        .auto-style16 {
            text-align: right;
        }

        .auto-style17 {
            width: 132px;
        }

        .auto-style18 {
            width: 132px;
            height: 24px;
            text-align: right;
        }

        .auto-style19 {
            width: 132px;
            text-align: right;
        }

        .auto-style20 {
            width: 132px;
            height: 26px;
            text-align: right;
        }

        .auto-style21 {
            width: 259px;
        }
    </style>
</head>
<body>
        <form id="form1" runat="server">

        <table class="auto-style1 container_body">
            <tr>
                <td class="auto-style17"><h3 style="color:aqua"><a runat="server" href="~/Default">Back to Home</a></h3></td>
                <td>
                    <h3>Member Registration</h3>
                </td>
                <td>
                    <img src="Images/centeniallogo1.jpg" class="auto-style21" /></td>
                
            </tr>
            <tr>
                <td class="auto-style17">
                    <h5 class="auto-style16">Please Complete the following fields:</h5>
                </td>
            </tr>
            <tr>
                <td class="auto-style18">First Name: <span class="ErrorMsg">*</span></td>
                <td class="auto-style13">
                    <asp:TextBox class="textbox" ID="txtFirstName" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style6">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtFirstName" ErrorMessage="First Name Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Last Name: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtLastName" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtLastName" ErrorMessage="Last Name Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Address: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtAddress" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="txtAddress" ErrorMessage="Address Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">City: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtCity" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator4" runat="server" ControlToValidate="txtCity" ErrorMessage="City Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style20">Province: <span class="ErrorMsg">*</span></td>
                <td class="auto-style15">
                    <asp:TextBox class="textbox" ID="txtProvince" runat="server" MaxLength="2" ></asp:TextBox>
                </td>
                <td class="auto-style9">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator5" runat="server" ControlToValidate="txtProvince" ErrorMessage="Province Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator4" runat="server" ControlToValidate="txtProvince" ErrorMessage="Please Enter Valid Province in Two Char." ForeColor="Red" ValidationExpression="^(N[BLSTU]|[AMN]B|[BQ]C|ON|PE|SK)$" ViewStateMode="Enabled"></asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Postal Code: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtPostalCode" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator6" runat="server" ControlToValidate="txtPostalCode" ErrorMessage="Postal Code Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator3" runat="server" ControlToValidate="txtPostalCode" ErrorMessage="Please Enter Valid Postal Code" ForeColor="Red" ValidationExpression="[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] ?[0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]"></asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Age: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtAge" runat="server" TextMode="Number"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator7" runat="server" ControlToValidate="txtAge" ErrorMessage="Age is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RangeValidator ID="RangeValidator1" runat="server" ControlToValidate="txtAge" ErrorMessage="Range Must be between 18 - 120" ForeColor="Red" MinimumValue="18" MaximumValue="120" Type="Integer"></asp:RangeValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Password: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtPassword" runat="server" TextMode="Password"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator8" runat="server" ControlToValidate="txtPassword" ErrorMessage="Password Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RegularExpressionValidator ID="Regex1" runat="server" ControlToValidate="txtPassword"
                       ValidationExpression="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" ErrorMessage="Password must contain:  6 char. , atleast 1 UpperCase and 1 digit" ForeColor="Red" />
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Confirm Password: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtConPassword" runat="server" TextMode="Password"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator9" runat="server" ControlToValidate="txtConPassword" ErrorMessage="Confirm Password Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:CompareValidator ID="CompareValidator1" runat="server" ControlToCompare="txtPassword" ControlToValidate="txtConPassword" ErrorMessage="Password Does Not Match" ForeColor="Red"></asp:CompareValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Email: <span class="ErrorMsg">*</span></td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtEmail" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">
                    <asp:RequiredFieldValidator ID="RequiredFieldValidator10" runat="server" ControlToValidate="txtEmail" ErrorMessage="Email Is Required" ForeColor="Red"></asp:RequiredFieldValidator>
                    <br />
                    <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ControlToValidate="txtEmail" ErrorMessage="You Must enter the valid Email " ForeColor="Red" ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"></asp:RegularExpressionValidator>
                </td>
            </tr>
            <tr>
                <td class="auto-style19">Alternative Email:</td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtAlterEmail" runat="server"></asp:TextBox>
                </td>
                <td class="auto-style12">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style19">Phone:</td>
                <td class="auto-style14">
                    <asp:TextBox class="textbox" ID="txtPhone" runat="server" TextMode="Number"></asp:TextBox>
                </td>
                <td class="auto-style12">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style19">Enter Another Member?</td>
                <td class="auto-style14">
                    <asp:CheckBox ID="chbmember" runat="server" />
                </td>
                <td class="auto-style12">&nbsp;</td>
            </tr>
            <tr>
                <td class="auto-style19">&nbsp;</td>
                <td class="auto-style14">
                    <asp:Button class="button" ID="btnRegistration" runat="server" OnClick="btnRegistration_Click" Text="Register" Width="110px" />
                    <asp:Button class="buttonclear" ID="btnreset" runat="server" Text="Reset" OnClick="btnreset_Click"/>
                </td>
                <td class="auto-style12">&nbsp;</td>
            </tr>
            <tr>
                <td colspan="3">
                    <h6>&copy; Copyright Chintan Patel - 300622893 - COMP229 - Web Development-ASP.NET -Fall 2017 - Assignment-1</h6>
                </td>
            </tr>
        </table>
        
    </form>

</body>
</html>
