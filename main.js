name_of_the_student_array=[];

function submit(){
    var display_student_array=[];

    for (var j=1; j<=4; j++)
    {
        var name_of_the_student=document.getElementById("student_"+j).value;
        console.log (name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);

    }

    console.log(name_of_the_student_array);

    var length_of_name_of_students_array=name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);

    for (var k=0; k<length_of_name_of_students_array; k++)

    {
        display_student_array.push("<h4> NAME - "+name_of_the_student_array[k]+"</h4>")
        console.log(display_student_array);
    }

    console.log(display_student_array);

    document.getElementById("displaynamewithcommas").innerHTML=display_student_array;

    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("displaynamewithoutcommas").innerHTML=remove_commas;




    
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";

}



function sort(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    
    var display_student_array_sorting=[];

    var length_of_name_of_students_array=name_of_the_student_array.length;
    console.log(length_of_name_of_students_array);

    for (var k=0; k<length_of_name_of_students_array; k++)

    {
        display_student_array_sorting.push("<h4> NAME - "+name_of_the_student_array[k]+"</h4>")
        console.log(display_student_array_sorting);

    }

    
    var remove_commas=display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("displaynamewithoutcommas").innerHTML=remove_commas;

    

}

