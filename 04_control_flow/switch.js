// ===============================================
// 💡 JavaScript Control Flow - switch Statement
// ===============================================


// ===============================
// 🔹 Syntax of switch
// ===============================

// switch (key) {
//     case value1:
//         // code block
//         break;

//     case value2:
//         // code block
//         break;

//     default:
//         // runs if no case matches
//         break;
// }


// ===============================
// 🔹 Example: Check Month
// ===============================

const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case match (no case matched)");
        break;
}


// ===============================
// ⚠️ Important Notes
// ===============================
// - switch compares using strict comparison (===), not loose (==)
// - If 'break' is not used, it will "fall through" to next case except default
// - Always include a 'default' as a fallback

// ✅ Example with missing break (will fall through):
/*
const status = "in_progress";

switch (status) {
    case "new":
        console.log("New task");
    case "in_progress":
        console.log("Task is in progress");   // This and next will run
    case "done":
        console.log("Task done");
        break;
    default:
        console.log("Unknown status");
}
*/


// ===============================
// ✅ Summary
// ===============================
// - Use switch when you have multiple possible fixed values to check
// - Preferable over long else-if ladders in some cases
// - Don’t forget 'break' or it’ll execute the next case too
