const QUESTIONS = [
    `לקראת יציאת הפלוגה למשימת אבטחת ישובים. הועמסה משאית בכל הציוד המחלקתי. לקראת סוף ההעמסה, שאל סמל המחלקה אם מישהו העמיס את ארגז החופ"ל על המשאית.
    אף אחד מהחיילים לא זכר שהוא העמיס את הארגז. בתגובה לכך, פקד הסמל לפרוק את המשאית כדי לוודא שהארגז נמצא בה. <br>
    האם הפקודה שנתן הסמל היא חוקית?`,
    `דני הוא חייל שאיתך במחלקה. במהלך מטווח שכח דני את המחסנית שלו ליד המטרות, בזמן שבדק את הפגיעות שלו במטרה. לפני מקצה הירי, ניסה דני לעדכן את המפקד בכך ששכח את המחסנית בקו המטרות, ולא הצליח.
    לאחר תחילת הירי במקצה, גילה המ"מ שדני לא יורה. הוא ניגש לדני לברר את העניין. מפקד המחקלה לא קיבל את התשובה של דני והורה לו "לטוס" לקו המטרות לקחת את המחסנית, תוך כדי המטווח. <br>
    האם דני צריך למלא פקודה זו?`,
    `בשבוע אימונים האחרון שהיה אתה ושאר החיילים במחלקה עשיתם טעויות מקצועיות לא רבות, לא עמדתם בזמנים ותפקדתם "על הפנים".
    ביום שישי בבוקר לפני תדריך היציאה המתוכנן הודיע המ"מ כי "כל המחלקה לא תצא הביתה, ותתאמן ביום שישי עד כניסת שבת ובמוצ"ש, כדי להגיע לרמות תפקוד סבירה. <br>
    האם המ"מ נתן למחלקתו פקודה חוקית?`,
    `בשיחת מחלקה סיפר המ"מ כי כשהוא היה מפק"צ בגדוד היה לו חייל מעולה שהיה חייל בודד.
     חייל זה השתחרר לא מזמן וכאות הערכה החליט המ"מ שביום ראשון בבוקר לפני הנסיעה לבסיס כל המחלקה תתייצב בדירה של אותו חייל ותעזור לו לשפץ את הבית. <br>
     האם המ"מ נתן למחלקה שלו פקודה חוקית?`,
    `אתה שומר בעמדת הבונקר. לקראת אמצע השמירה, הגיע אליך הסמל והודיע לך שאתה עובר לשמור בש"ג.
    שאלת אותו "מי מחליף אותי בעמדה?" והוא ענה "שים מטרת דמות בעמדה ובוא". <br>
    האם הסמל נתן פקודה חוקית?`,
    `במהלך פעילות כנגד נערים שנצפו זורקים בקבוקי תבערה ואבנים, תפסתם שלושה חשודים. במהלך נסיעה למפקדת החטיבה הסתבר שזו הפעם השלישית שעוצרים את אותם הנערים ובפעמים הקודמות הם שוחררו ללא משפט או עונש.
    שאלת את המ"מ שלך "איך זה הגיוני שאנחנו קורעים ומסכנים את עצמנו והם משוחררים בלי עונש ומשפט?" המ"מ ענה לך "תטפלו בהם, שלפחות הפעם אם הם ישוחררו הם יקבלו את מה שמגיע להם". <br>
    האם המ"מ נתן לכם פקודה חוקית?`,
    `"אסור לך לדרוך על הדשא - בפקודה" <br>
    האם פקודה זו חוקית?`,
    `אתם עומדים בפני לילה לבן מלא משימות. בזמן ההתארגנות למשימה אמרת שאתה קופץ לשק"ם ושאלת אם להביא משהו למישהו.
    המפקד שהיה איתכם שמח על ההצעה וביקש שתקנה לו חבילת עוגיות, קולה ומסטיקים. <br>
    האם המפקד נתן לך פקודה חוקית?`,
];

const ANSWER_OPTIONS = [
    `דרישה זו אינה פקודה`,
    `זוהי פקודה חוקית וחובה לבצעה`,
    `זוהי פקודה בלתי חוקית וחובה לבצע אותה`,
    `זוהי פקודה בלתי חוקית ולכן אסור לקיים אותה`
];

const ANSWERS = [2,4,2,3,3,4,2,1];

const EXPLANATION_HTML = `
    <h1 class="titleText" id="title">מה נלמד פה?</h1>
    <p class="text" id="text">בלומדה זו נלמד מהי משמעותה של פקודה בצה"ל ואת החובה לבצעה. <br> נבין את המצופה מאיתנו בעת קבלת פקודה. נבחין בין סוגי הפקודות השונות ונלמד לפעול בהתאם.</p>
    <button class="button explainButton" id="button">אז יאללה בואו נתחיל?</button>
`;

const EXPLANATION_EX1_HTML = `
    <h1 class="titleText" id="title">נעבור <br> למבחן</h1>
    <p class="text" id="text">כעת יוצגו בפניכם סיטואציות ופקודות ועליכם לבחור מה אופי הפקודה שניתנה</p>
    <button class="button" id="button">הבנתי</button>
`;

const QUESTION_TEMPLATE_HTML = `
    <div class="questionContainer">
        <p class="text question questionTitle" id="question_title"></p>
        <div class="scrollContainer">
            <p class="text question questionText" id="text"></p>
        </div>
        <div class="container" id="form_container">
            <form>
                <label class="checked" id="label0">
                    <input id="radio0" type="radio" name="radio" checked/>
                    <span id="span0">דרישה זו אינה פקודה</span>
                </label>
                <label id="label1">
                    <input id="radio1" type="radio" name="radio"/>
                    <span id="span1">זוהי פקודה חוקית וחובה לבצעה</span>
                </label>
                <label id="label2">
                    <input id="radio2" type="radio" name="radio"/>
                    <span id="span2">זוהי פקודה בלתי חוקית וחובה לבצעה</span>
                </label>
                <label id="label3">
                    <input id="radio3" type="radio" name="radio"/>
                    <span id="span3">זוהי פקודה בלתי חוקית ולכן אסור לקיים אותה</span>
                </label>
            </form>
        </div>
        <button class="button questionButton" id="button">בדיקה</button>
    </div>
`;

let questionNum = 1;
const NUM_OF_QUESTIONS = 8;
let score = 0;
let restart = false;

const FINISH_SCREEN = `
    <h1 class="titleText">כל הכבוד סיימתם את המבחן!</h1>
    <p class="text finishText" id="text"></p>
    <button class="button" id="button">עוד פעם!</button>
`
const SYMBOLS_HTML = `
    <div id="symbols">
    <img src="media\פלא.png" alt="סמל פלא" class="gapaLogo">
    <img src="media\סמל סיירים ללא רקע.png" alt="סמל סיירים" class="shivtaLogo">
    </div>
`;

window.addEventListener("load", () => {
    document.getElementById("start_button").style.bottom = `30%`;
    document.getElementById("start_button").addEventListener("click", start);
});

const start = () => {
    if (!restart) {
        document.getElementById("start_button").removeEventListener("click", start);
    }
    questionNum = 1;
    document.getElementById("body").removeChild(document.getElementById("symbols"));
    document.getElementById("content").innerHTML = EXPLANATION_HTML;
    document.getElementById("text").style.textAlign = `center`;
    document.getElementById("title").style.top = `5%`;
    document.getElementById("button").addEventListener("click", startExOneExplanation);
}

const startExOneExplanation = () => {
    document.getElementById("button").removeEventListener("click", startExOneExplanation);
    document.getElementById("content").innerHTML = EXPLANATION_EX1_HTML;
    document.getElementById("text").style.textAlign = `center`;
    document.getElementById("title").style.top = `5%`;
    document.getElementById("text").style.top = `25vh`;
    document.getElementById("button").addEventListener("click", startExr1);
}

const startExr1 = () => {
    setUpQuestion();
}

const setUpQuestion = () => {
    if (questionNum <= NUM_OF_QUESTIONS) {
        document.getElementById("content").innerHTML = QUESTION_TEMPLATE_HTML;
        document.getElementById("question_title").innerHTML = `שאלה ${questionNum}`;
        document.getElementById("text").innerHTML = QUESTIONS[questionNum - 1];
        document.getElementById("button").addEventListener("click", checkAnswer);
        document.getElementById("form_container").addEventListener("click", checkedRadio);
    } else {
        finish();
    }
    
}

const checkedRadio = (event) => {
    if(event.target.tagName === "SPAN" || event.target.tagName === "INPUT") {
        for (i = 0; i < 4; i++) {
            document.getElementById(`label${i}`).classList = ``;
        }
        document.getElementById(`label${event.target.id.slice(-1)}`).classList.add("checked");
    }
}

const checkAnswer = () => {
    let checkedAnswer = 0;
    let rightAnswer = ANSWERS[questionNum - 1] - 1;
    for (i = 0; i < 4; i++) {
        if (document.getElementById(`radio${i}`).checked === true) {
            checkedAnswer = i;
        }
        document.getElementById(`radio${i}`).disabled = true;
    }
    
    if(checkedAnswer === rightAnswer) {
        document.getElementById(`label${checkedAnswer}`).classList.add("rightAnswer");
        score++;
    } else {
        document.getElementById(`label${checkedAnswer}`).classList.add("wrongAnswer");
        document.getElementById(`label${rightAnswer}`).classList.add("rightAnswer");
    }
    document.getElementById("button").removeEventListener("click", checkAnswer);
    document.getElementById("form_container").removeEventListener("click", checkedRadio);
    questionNum++;
    document.getElementById("button").removeEventListener("click", checkAnswer);
    document.getElementById("button").innerText = "המשך";
    setTimeout(() => { document.getElementById("button").addEventListener("click", setUpQuestion);}, 500);
}

const finish = () => {
    document.getElementById("body").innerHTML += SYMBOLS_HTML;
    document.getElementById("content").innerHTML = FINISH_SCREEN;
    document.getElementById("text").innerHTML = `ציונכם ${parseInt(score/NUM_OF_QUESTIONS *100)} מתוך 100 <br>
    אתם מוזמנים לענות שוב על המבחן ולשפר את התוצאות במקרה הצורך.`;
    restart = true;
    document.getElementById("button").addEventListener("click",start);
}