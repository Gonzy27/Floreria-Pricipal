
<?php		
//conexion a db y servidor				
		$link = mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");;
		$db = mysql_select_db("floreria",$link) or die("<h2>Error de conexión</h2>");;
		//valores formulario
		$n=$_POST['registrate_nombre'];
		$ap=$_POST['registrate_apellido_paterno'];
		$am=$_POST['registrate_apellido_materno'];
		$r=$_POST['registrate_rut'];
		$t=$_POST['registrate_telefono'];
		$ce=$_POST['registrate_celular'];
		$co=$_POST['registrate_correo'];
		$pw=$_POST['registrate_contrasena'];
		mysql_query("INSERT INTO registros VALUES('$n','$ap','$am','$r','$t','$ce','$co','$pw')",$link) or die("<h2> Error de envío</h2>");;
		echo '<script language="javascript">alert("Registro completo");</script>';
		header ("inicio.html");
?>

