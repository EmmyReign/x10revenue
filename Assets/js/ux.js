$(document).ready(function(){
    $(document).on('click', '#btnLogin', function(){
        if (!$.trim($('#txtPhoneNumber').val())) {
            $("#txtErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Phone number is required');
            $("#txtPhoneNumber").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtPassword').val())) {
            $("#txtErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Password is required');
            $("#txtPassword").focus();
            e.preventDefault();
        }
        window.location.href = "dashboard.html";
    });
    $(document).on('keypress', '#txtPhoneNumber', function(){
        $("#txtErrMessage").html('');
    });
    $(document).on('keypress', '#txtPassword', function(){
        $("#txtErrMessage").html('');
    });

    $(document).on('click', '#btnRegister', function(){
        //Details
        if (!$.trim($('#txtPhoneNumber').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Phone number is required');
            $("#txtPhoneNumber").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtFName').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! First name is required');
            $("#txtFName").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtLName').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Last name is required');
            $("#txtLName").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtAOO').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Address of origin is required');
            $("#txtAOO").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtLGA').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! LGA is required');
            $("#txtLGA").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtSOO').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! State of origin is required');
            $("#txtSOO").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtNationality').val())) {
            $("#txtDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Nationality is required');
            $("#txtNationality").focus();
            e.preventDefault();
        }
        //Personal Details
        if (!$.trim($('#txtHPhone').val())) {
            $("#txtCDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Home phone number is required');
            $("#txtHPhone").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtCAddress').val())) {
            $("#txtCDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Current address is required');
            $("#txtCAddress").focus();
            e.preventDefault();
        }
        if (!$("#txtCALGA option:selected").val()) {
            $("#txtCDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Current address local government is required');
            $("#txtCALGA").focus();
            e.preventDefault();
        }
        if (!$("#txtCState option:selected").val()) {
            $("#txtCDErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Current state is required');
            $("#txtCState").focus();
            e.preventDefault();
        }
        //Authentication
        if (!$.trim($('#txtPassword').val())) {
            $("#txtAuthErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Password is required');
            $("#txtPassword").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtCPassword').val())) {
            $("#txtAuthErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Please confirm your password');
            $("#txtCPassword").focus();
            e.preventDefault();
        }
        if ($('#txtPassport').get(0).files.length === 0) {
            $("#txtAuthErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Passport photograph is required');
            $("#txtPassport").focus();
            e.preventDefault();
        }
        if ($('#txtIDCard').get(0).files.length === 0) {
            $("#txtAuthErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Identification card is required');
            $("#txtIDCard").focus();
            e.preventDefault();
        }
        window.location.href = "pverify.html";
    });
    //Details
    $(document).on('keypress', '#txtPhoneNumber', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtFName', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtLName', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtAOO', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtLGA', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtSOO', function(){
        $("#txtDErrMessage").html('');
    });
    $(document).on('keypress', '#txtNationality', function(){
        $("#txtDErrMessage").html('');
    });
    //Current Details
    $(document).on('keypress', '#txtHPhone', function(){
        $("#txtCDErrMessage").html('');
    });
    $(document).on('keypress', '#txtCAddress', function(){
        $("#txtCDErrMessage").html('');
    });
    $(document).on('click', '#txtCALGA', function(){
        $("#txtCDErrMessage").html('');
    });
    $(document).on('click', '#txtCState', function(){
        $("#txtCDErrMessage").html('');
    });
    //Current Details
    $(document).on('keypress', '#txtPassword', function(){
        $("#txtAuthErrMessage").html('');
    });
    $(document).on('keypress', '#txtCPassword', function(){
        $("#txtAuthErrMessage").html('');
    });
    $(document).on('click', '#txtPassport', function(){
        $("#txtAuthErrMessage").html('');
    });
    $(document).on('click', '#txtIDCard', function(){
        $("#txtAuthErrMessage").html('');
    });
    //Phone Verification
    $(document).on('click', '#btnVerify', function(){
        if (!$.trim($('#txtPhoneNumberCode').val())) {
            $("#txtPVErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Your verification is missing');
            $("#txtPhoneNumberCode").focus();
            e.preventDefault();
        }
        window.location.href = "login.html";
    });
    $(document).on('keypress', '#txtPhoneNumberCode', function(){
        $("#txtPVErrMessage").html('');
    });
    //Forgot Password
    $(document).on('click', '#btnResetPassword', function(){
        if (!$.trim($('#txtFPPhoneNumber').val())) {
            $("#txtFPErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Your phone number is required');
            $("#txtFPPhoneNumber").focus();
            e.preventDefault();
        }
        window.location.href = "resetpassword.html";
    });
    $(document).on('keypress', '#txtFPPhoneNumber', function(){
        $("#txtFPErrMessage").html('');
    });
    //Reset Password
    $(document).on('click', '#btnRPReset', function(){
        if (!$.trim($('#txtRPCode').val())) {
            $("#txtRPErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Your verification code is missing');
            $("#txtRPCode").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtNewPassword').val())) {
            $("#txtRPErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Please enter your new password');
            $("#txtNewPassword").focus();
            e.preventDefault();
        }
        if (!$.trim($('#txtRPCPassword').val())) {
            $("#txtRPErrMessage").html('<i class="fa fa-exclamation-circle" style="font-size:20px"></i> Oops! Please confirm your new password');
            $("#txtRPCPassword").focus();
            e.preventDefault();
        }
        window.location.href = "login.html";
    });
    $(document).on('keypress', '#txtRPCode', function(){
        $("#txtRPErrMessage").html('');
    });
    $(document).on('keypress', '#txtNewPassword', function(){
        $("#txtRPErrMessage").html('');
    });
    $(document).on('keypress', '#txtRPCPassword', function(){
        $("#txtRPErrMessage").html('');
    });
    //Manage User
    $(document).on('click', '#userediticon1', function(){
        document.getElementById("userviewicon1").style.display = "none"
        document.getElementById("userediticon1").style.display = "none"
        document.getElementById("adminActionDiv1").style.display = "block"
    });
    $(document).on('click', '#userediticon2', function(){
        document.getElementById("userviewicon2").style.display = "none"
        document.getElementById("userediticon2").style.display = "none"
        document.getElementById("adminActionDiv2").style.display = "block"
    });
    $(document).on('click', '#userediticon3', function(){
        document.getElementById("userviewicon3").style.display = "none"
        document.getElementById("userediticon3").style.display = "none"
        document.getElementById("adminActionDiv3").style.display = "block"
    });
    $(document).on('click', '#userediticon4', function(){
        document.getElementById("userviewicon4").style.display = "none"
        document.getElementById("userediticon4").style.display = "none"
        document.getElementById("adminActionDiv4").style.display = "block"
    });
    $(document).on('click', '#userediticon5', function(){
        document.getElementById("userviewicon5").style.display = "none"
        document.getElementById("userediticon5").style.display = "none"
        document.getElementById("adminActionDiv5").style.display = "block"
    });
    $(document).on('click', '#userediticon6', function(){
        document.getElementById("userviewicon6").style.display = "none"
        document.getElementById("userediticon6").style.display = "none"
        document.getElementById("adminActionDiv6").style.display = "block"
    });
    $(document).on('click', '#userediticon7', function(){
        document.getElementById("userviewicon7").style.display = "none"
        document.getElementById("userediticon7").style.display = "none"
        document.getElementById("adminActionDiv7").style.display = "block"
    });
    $(document).on('click', '#userediticon8', function(){
        document.getElementById("userviewicon8").style.display = "none"
        document.getElementById("userediticon8").style.display = "none"
        document.getElementById("adminActionDiv8").style.display = "block"
    });
    $(document).on('click', '#userediticon9', function(){
        document.getElementById("userviewicon9").style.display = "none"
        document.getElementById("userediticon9").style.display = "none"
        document.getElementById("adminActionDiv9").style.display = "block"
    });
    $(document).on('click', '#userediticon10', function(){
        document.getElementById("userviewicon10").style.display = "none"
        document.getElementById("userediticon10").style.display = "none"
        document.getElementById("adminActionDiv10").style.display = "block"
    });
    
});