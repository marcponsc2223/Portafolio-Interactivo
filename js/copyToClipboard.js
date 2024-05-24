let discordIcon = document.getElementById('discordIcon')
discordIcon.addEventListener('click', () => {
    let value = discordIcon.getAttribute('data-name')
    navigator.clipboard.writeText(value);
    sendEmailErrorFunc('Discord name copied to clipboard')
    hideEmailError()

})