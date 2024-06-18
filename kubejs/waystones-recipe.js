// atm9_mrw
// kubejs/server_scripts/mods/waystones

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'waystones:waystone' })
    allthemods.remove({ id: 'waystones:sandy_waystone' })
    allthemods.remove({ id: 'waystones:mossy_waystone' })
})