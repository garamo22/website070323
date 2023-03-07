function speichern() {
	var name = document.getElementById("name").value;
	var adresse = document.getElementById("adresse").value;
	var beruf = document.getElementById("beruf").value;
	var hobbies = document.getElementById("hobbies").value;

	var csv = "Name,Adresse,Beruf,Hobbies\n";
	csv += name + "," + adresse + "," + beruf + "," + hobbies + "\n";

	// Hier muss der Code zum Schreiben in die CSV-Datei ergänzt werden

	alert("Die Daten wurden gespeichert!");
}
