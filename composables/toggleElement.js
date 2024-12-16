export function toggleVisibility(reactiveVar) {
    reactiveVar.value = !reactiveVar.value
    document.body.classList.toggle('overflow-hidden')
}