var users = [
    {
        id: 0,
        avatar: "./img/user.png",
        nickname: "Vasya Kashtanov",
        last_message: "message0",
        time: "000",
        status: "Online"
    },
    {
        id: 1,
        avatar: "./img/user.png",
        nickname: "Danya Kashtanov",
        last_message: "message1",
        time: "123",
        status: "Offline"
    },
    {
        id: 2,
        avatar: "./img/user.png",
        nickname: "Максим Kashtanov",
        last_message: "message2",
        time: "12333",
        status: "Online"
    },
    {
        id: 3,
        avatar: "./img/user.png",
        nickname: "user3",
        last_message: "message3",
        time: "1233",
        status: "Online"
    },
    {
        id: 4,
        avatar: "./img/user.png",
        nickname: "user4",
        last_message: "message4",
        time: "1232",
        status: "Online"
    },
    {
        id: 5,
        avatar: "./img/user.png",
        nickname: "user5",
        last_message: "message5",
        time: "1235",
        status: "Online"
    },

    {
        id: 6,
        avatar: "./img/user.png",
        nickname: "user1",
        last_message: "message1",
        time: "123",
        status: "Online"
    },
    {
        id: 7,
        avatar: "./img/user.png",
        nickname: "user2",
        last_message: "message2",
        time: "12333",
        status: "Online"
    },
    {
        id: 8,
        avatar: "./img/user.png",
        nickname: "user3",
        last_message: "message3",
        time: "1233",
        status: "Online"
    },
    {
        id: 9,
        avatar: "./img/user.png",
        nickname: "user4",
        last_message: "message4",
        time: "1232",
        status: "Online"
    },
    {
        id: 10,
        avatar: "./img/user.png",
        nickname: "user5",
        last_message: "message5",
        time: "1235",
        status: "Online"
    },
    {
        id: 11,
        avatar: "./img/user.png",
        nickname: "user1",
        last_message: "message1",
        time: "123",
        status: "Online"
    },
    {
        id: 12,
        avatar: "./img/user.png",
        nickname: "user2",
        last_message: "message2",
        time: "12333",
        status: "Online"
    },
    {
        id: 13,
        avatar: "./img/user.png",
        nickname: "user3",
        last_message: "message3",
        time: "1233",
        status: "Online"
    },
    {
        id: 14,
        avatar: "./img/user.png",
        nickname: "user4",
        last_message: "message4",
        time: "1232",
        status: "Online"
    },
    {
        id: 15,
        avatar: "./img/user.png",
        nickname: "user5",
        last_message: "message5",
        time: "1235",
        status: "Online"
    },
    {
        id: 16,
        avatar: "./img/user.png",
        nickname: "user1",
        last_message: "message1",
        time: "123",
        status: "Online"
    },
    {
        id: 17,
        avatar: "./img/user.png",
        nickname: "user2",
        last_message: "message2",
        time: "12333",
        status: "Online"
    },
    {
        id: 18,
        avatar: "./img/user.png",
        nickname: "user3",
        last_message: "message3",
        time: "1233",
        status: "Online"
    },
    {
        id: 19,
        avatar: "./img/user.png",
        nickname: "user4",
        last_message: "message4",
        time: "1232",
        status: "Online"
    },
    {
        id: 20,
        avatar: "./img/user.png",
        nickname: "user5",
        last_message: "message5",
        time: "1235",
        status: "Online"
    }
]

var message = [
    {
        id: 0,
        mes: [
            {
                type: 0,
                text: "hello",
                time: "19:22"
            },
            {
                type: 1,
                text: "hello",
                time: "19:23"
            }
        ]
    },
    {
        id: 1,
        mes: [
            {
                type: 1,
                text: "yeah SER",
                time: "19:22"
            },
            {
                type: 0,
                text: "aga",
                time: "19:23"
            }
        ]
    }
]

var idUser;

function loadList()
{
    document.querySelector(".list-users").innerHTML = '';
    for(var i = 0; i < users.length; i++)
    {
        document.querySelector(".list-users").innerHTML += '\
        <li class="item-user" onclick="openDialog('+ users[i].id +')">\
        <img class="avatar" src="' + users[i].avatar + '" alt="user">\
        <div class="nickname">' + users[i].nickname + '</div>\
        <div class="last-message">' + users[i].last_message + '</div>\
        <div class="time">' + users[i].time + '</div>\
        </li>\
        ';
    }   
}

loadList();

function loadMessage(id)
{
    document.querySelector(".message-list").innerHTML = "";
    if(message[id] != undefined)
    {
        for(var i = 0; i < message[id].mes.length; i++)
        {
            if(message[id].mes[i].type == 0)
            {
                document.querySelector(".message-list").innerHTML += '\
                <div class="message-receive">\
                <img class="avatar-receive" src="img/user.png" alt="user">\
                <div class="text-receive-bg">\
                <div class="text-receive">' + message[id].mes[i].text + '</div>\
                <div class="time-receive">' + message[id].mes[i].time + '</div>\
                </div>\
                </div>\
                '
            }
            if(message[id].mes[i].type == 1)
            {
                document.querySelector(".message-list").innerHTML += '\
                <div class="message-send">\
                <div class="text-send-bg">\
                <div class="text-send">' + message[id].mes[i].text + '</div>\
                <div class="time-send">' + message[id].mes[i].time + '</div>\
                </div>\
                <img class="avatar-send" src="img/user.png" alt="user">\
                </div>\
                '
            }
        }
    }
}

function back_to_contacts()
{
    var element = document.getElementById("message-id");
    element.style.display = "none";
    var element = document.getElementById("contacts-id");
    element.style.display = "block";
    var element = document.getElementById("main-bg-id");
    element.style.gridTemplateAreas = '"A A A A"';
}

window.addEventListener('resize', (e) => {
    if(window.innerWidth <= 900)
    {
        var element = document.getElementById("main-bg-id");
        element.style.gridTemplateAreas = '"A A A A"';
        var element = document.getElementById("message-id");
        element.style.display = "none";
        var element = document.getElementById("contacts-id");
        element.style.display = "block";
    }
    if(window.innerWidth > 900)
    {
        var element = document.getElementById("main-bg-id");
        element.style.gridTemplateAreas = '"A B B B"';
        var element = document.getElementById("message-id");
        element.style.display = "block";
        var element = document.getElementById("contacts-id");
        element.style.display = "block";
    } 
});

function openDialog(id)
{
    idUser = id;
    var element = document.getElementById("message-id");
    var display = window.getComputedStyle(element).display;
    if(display == "none" && window.innerWidth <= 900)
    {
        element.style.display = "block";
        var element = document.getElementById("main-bg-id");
        element.style.gridTemplateAreas = '"B B B B"';
        var element = document.getElementById("contacts-id");
        element.style.display = "none";
    }
    if(window.innerWidth > 900)
    {
        var element = document.getElementById("main-bg-id");
        element.style.gridTemplateAreas = '"A B B B"';
        var element = document.getElementById("message-id");
        element.style.display = "block";
        var element = document.getElementById("contacts-id");
        element.style.display = "block";
    }
    var element = document.getElementById("text-bg");
    element.style.display = "none";
    var element = document.getElementById("message-bg");
    element.style.display = "block";
    var element = document.getElementById("info-menu-id");
    element.innerHTML = "";
    element.innerHTML += '\
    <img class="back" id="back-id" src="img/back.png" alt="back" onclick="back_to_contacts()">\
    <div class="nickname">' + users[id].nickname + '</div>\
    <div class="status">' + users[id].status + '</div>\
    <img class="search" src="img/search.png" alt="search">\
    <img class="menu" src="img/menu.png" alt="menu">\
    ';
    loadMessage(id);
}

function searchContact(event)
{
    var search = document.getElementById("search-contact-id");
    search = search.value.toLocaleLowerCase();
    document.querySelector(".list-users").innerHTML = '';
    for(var i = 0; i < users.length; i++)
    {
        if(users[i].nickname.toLocaleLowerCase().includes(search))
        {
            document.querySelector(".list-users").innerHTML += '\
            <li class="item-user" onclick="openDialog('+ users[i].id +')">\
            <img class="avatar" src="' + users[i].avatar + '" alt="user">\
            <div class="nickname">' + users[i].nickname + '</div>\
            <div class="last-message">' + users[i].last_message + '</div>\
            <div class="time">' + users[i].time + '</div>\
            </li>\
            ';
        }
    }
}

window.onkeydown = function(event) 
{
    if(event.key == "Escape")
    {
        var element = document.getElementById("text-bg");
        element.style.display = "grid";
        var element = document.getElementById("message-bg");
        element.style.display = "none";
        if(window.innerWidth <= 900)
        {
            var element = document.getElementById("main-bg-id");
            element.style.gridTemplateAreas = '"A A A A"';
            var element = document.getElementById("message-id");
            element.style.display = "none";
            var element = document.getElementById("contacts-id");
            element.style.display = "block";
        }
    }
};

function sendMessage(event)
{
    if(event.key == "Enter")
    {
        var time = new Date();
        time = time.toLocaleTimeString().slice(0,-3);
        var text = document.getElementById("send-message-id");
        text = text.value;
        if(message[idUser] == undefined)
        {
            message[idUser] = {
                id: idUser,
                mes: [
                ]
            }
        }
        if(text != "" || text.length != 0)
        {
            message[idUser].mes[message[idUser].mes.length] = {
                type: 1,
                text: text,
                time: time
            }
            loadMessage(idUser);
        }
        document.getElementById("send-message-id").value = "";
    }
}