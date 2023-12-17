function saveRecord() {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const email = document.getElementById("email").value
    const gender = document.getElementsByName("gender")
    var gendervalue = ""

    for (i of gender) {
        if (i.checked) {
            gendervalue = i.value
        }
    }
    const language = document.getElementsByName("language")
    var languageArray = []
    for (i of language) {
        if (i.checked) {
            languageArray.push(i.value)
        }
    }
    var row = document.createElement("tr")
    var name_td = document.createElement("td")
    name_td.textContent = name
    row.append(name_td)

    var age_td = document.createElement("td")
    age_td.textContent = age
    row.append(age_td)

    var gender_td = document.createElement("td")
    gender_td.textContent = gendervalue
    row.append(gender_td)

    var lang_td = document.createElement("td")
    lang_td.textContent = languageArray
    row.append(lang_td)

    var email_td = document.createElement("td")
    email_td.textContent = email
    row.append(email_td)


    var del_btn = document.createElement("button")
    del_btn.style.backgroundColor = "red"
    del_btn.style.padding = "5px"
    del_btn.style.border = "none"
    del_btn.style.borderRadius = "30px"
    del_btn.textContent = "delete"
    del_btn.setAttribute('onclick', "delete_row(event)")
    row.append(del_btn)

    var rec_table = document.getElementById("rec_table")
    rec_table.append(row)
}
function delete_row(event) {
    event.target.parentElement.remove()
}