$(function()
{
	
	let numeros = '1234567890';
	let letras  = 'qwertyuiopasdfghjklñzxcvbnm' +
				'QWERTYUIOPASDFGHJKLÑZXCVBNM' +
                'ÁÉÍÓÚáéíóú- @_.';
    let rut = '0123456789-kK'
	
	$('.txtRut').keypress(function(e)
	{
		let caracter = String.fromCharCode(e.which);
		if(rut.indexOf(caracter) < 0)
			return false;
	});
	$('.txtNombre').keypress(function(e)
	{
		let caracter = String.fromCharCode(e.which);
		if(letras.indexOf(caracter) < 0)
			return false;		
    });
    
    $('.txtTelefono').keypress(function(e)
	{
		let caracter = String.fromCharCode(e.which);
		if(numeros.indexOf(caracter) < 0)
			return false;		
	});
	
	$('.btnEnviar').click(function()
	{
		if($('.txtEmail').val() == '')
		{
			alert('No especificó el Correo');
			$('.txtEmail').focus();
			return;			
		}

		let texto = "";
		texto = $('.txtRut').val();
		
		if(texto == '')
		{
			alert('No especificó el rut');
			$('.txtRut').focus();
			return;			
		}
		
		texto = $('.txtNombre').val();
		
		if(texto == '')
		{
			alert('No especificó el nombre');
			$('.txtNombre').focus();
			return;			
		}

		if($('.txtTelefono').val() == '')
		{
			alert('No especificó el telefono');
			$('.txtTelefono').focus();
			return;			
		}
		
		let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
		
		if(!emailRegex.test($('.txtEmail').val()))
		{
			alert('Formato del correo no es válido');
			return false;
		}
		
		alert('Los datos son: \n' +
			$('.txtEmail').val() + '\n' +
			$('.txtRut').val() + '\n' +
			$('.txtNombre').val() + '\n' +
            $('.txtFechaNac').val() + '\n' +
            $('.txtTelefono').val() + '\n' +
            $('.cmbRegion').val() + '\n' +
            $('.cmbCiudad').val() + '\n' +
			$('.cmbocupacion').val());	
	})
	
	function limpiarFormulario() {
		document.getElementById("miForm").reset();
	  }
})