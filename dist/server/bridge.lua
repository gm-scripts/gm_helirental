local Tunnel = module("vrp", "lib/Tunnel")
local Proxy = module("vrp", "lib/Proxy")

vRP = Proxy.getInterface("vRP")
vRPclient = Tunnel.getInterface("vRP", "vRP_helirental")

RegisterServerEvent('gm_helirental:tryPayment_vrp')
AddEventHandler('gm_helirental:tryPayment_vrp', function(data)
    local user_id = vRP.getUserId({source})
    local succesfull = false

    local money = vRP.getMoney({user_id})
    if data.payment >= 0 and money >= data.payment then
        vRP.setMoney({user_id, money - data.payment})
        succesfull = true
    else
        succesfull = false
    end

    if succesfull == false then
        local user_id = vRP.getUserId(source)

        local money = vRP.getMoney(user_id)
        if data.payment >= 0 and money >= data.payment then
            vRP.setMoney(user_id, money - data.payment)
            succesfull = true
        else
            succesfull = false
        end
    end
    TriggerClientEvent('gm_helirental:callback', source, succesfull, data.CallbackID)
end)

RegisterServerEvent('gm_helirental:forcePayment_vrp')
AddEventHandler('gm_helirental:forcePayment_vrp', function(data)
    local user_id = vRP.getUserId({source})
    local cb = 0

    local money = vRP.getMoney({user_id})
    if data.payment >= 0 and money >= data.payment then
        vRP.setMoney({user_id, money - data.payment})
        cb = data.payment
    else
        cb = vRP.getMoney({user_id})
        vRP.setMoney({user_id, 0})
    end

    if cb == 0 then
        local user_id = vRP.getUserId(source)

        local money = vRP.getMoney(user_id)
        if data.payment >= 0 and money >= data.payment then
            vRP.setMoney(user_id, money - data.payment)
            cb = data.payment
        else
            cb = vRP.getMoney(user_id)
            vRP.setMoney(user_id, 0)
        end
    end
    TriggerClientEvent('gm_helirental:callback', source, cb, data.CallbackID)
end)