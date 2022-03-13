const $textInput = $("[type='text']")
const $submit = $("[type = 'submit']")
const $ul = $("#dev-skills")

const skills = []


$submit.on("click", (event) => {
    event.preventDefault()
    const newSkill = $textInput.val()
    skills.push(newSkill)
    const $li = $("<li>")
    $li.text(newSkill)
    $ul.append($li)
    const remove = (event) => {
        const $target = $(event.target)
        $target.remove()
    }
    $li.on("click", remove)
    $textInput.val("")
})