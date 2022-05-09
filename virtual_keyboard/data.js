let dataKeyboard = {
    shiftStatus: {
        value: false,
        active: "shiftTrue",
        notActive: "shiftFalse",
    },
    capslockStatus: {
        value: false,
        active: "capslockOn",
        notActive: "capslockOff",
    },
    languageStatus: "en",
    activeKeyBoard: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
        'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
        'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
        'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
    ],
    lettersList: {
        "ru": {
            "capslockOff": {
                "shiftFalse": [
                    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
                    'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                    'shiftleft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftTrue": [
                    'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '|',
                    'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                    'shiftleft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            },
            "capslockOn": {
                "shiftTrue": [
                    'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '|',
                    'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'enter',
                    'shiftleft', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftFalse": [
                    'Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
                    'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'enter',
                    'shiftleft', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            }
        },
        "en": {
            "capslockOff": {
                "shiftFalse": [
                    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                    'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                    'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftTrue": [
                    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
                    'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "\"", 'enter',
                    'shiftleft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            },
            "capslockOn": {
                "shiftTrue": [
                    '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
                    'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                    'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
                    'shiftleft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ],
                "shiftFalse": [
                    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                    'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
                    'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'enter',
                    'shiftleft', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'shiftright', 'up',
                    'ctrl', 'alt', ' ', 'alt', 'ctrl', 'left', 'down', 'right',
                ]
            }
        }
    },

    allLetters: [
        "ё","1","2","3","4","5","6","7","8","9","0","-","=","backspace",
        "tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\",
        "capslock","ф","ы","в","а","п","р","о","л","д","ж","э",
        "enter","shiftleft","я","ч","с","м","и","т","ь","б","ю",".",
        "shiftright","up","ctrl","alt"," ","left","down","right","Ё",
        "!",'"',"№",";","%",":","?","*","(",")","_","+","Й","Ц","У",
        "К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/","Ф","Ы","В","А","П",
        "Р","О","Л","Д","Ж","Э","Я","Ч","С","М","И","Т","Ь","Б","Ю",
        ",","`","q","w","e","r","t","y","u","i","o","p","[","]","a",
        "s","d","f","g","h","j","k","l","'","z","x","c","v","b","n",
        "m","~","@","#","$","^","&","Q","W","E","R","T","Y","U","I",
        "O","P","{","}","|","A","S","D","F","G","H","J","K","L","Z",
        "X","C","V","B","N","M","<",">"
    ]
}
