setTimeout(() => {
    profileload()
}, 700)

function profileload() {
   const profile = document.querySelector('.inner-friends-list')

   profile.innerHTML = "<div class='outer-friends-box'><div class='inner-friends-box'><img class='friends-img box-hover' src='https://tr.rbxcdn.com/384a0ce5d9faef19e0637cb158d5ae82/150/150/AvatarHeadshot/Png'><a href='' class='friends-name;'>GavinSmash</a></div></div>"
   profile.classList.remove('spinner')
}
