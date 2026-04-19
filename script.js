// 🌿 Get tree from QR OR from page name
function getTree() {
    const params = new URLSearchParams(window.location.search);
    let tree = params.get("tree");

    if (tree) return tree;

    const page = window.location.pathname.split("/").pop();

    if (page.includes("neem")) return "neem";
    if (page.includes("nirgundi")) return "nirgundi";
    if (page.includes("shatavari")) return "shatavari";
    if (page.includes("chafa")) return "chafa";
    if (page.includes("amrutvalli")) return "amrutvalli";

    return null;
}

// 🌐 English button
function goToEnglish() {
    const tree = getTree();

    if (tree === "neem") {
        window.location.href = "neem_english.html";
    }
    else if (tree === "nirgundi") {
        window.location.href = "nirgundi_english.html";
    } 
    else if (tree === "shatavari") {
        window.location.href = "shatavari_english.html";
    } 
    else if (tree === "chafa") {
        window.location.href = "chafa_english.html";
    } 
    else if (tree === "amrutvalli") {
        window.location.href = "amrutvalli_english.html";
    } 
    else {
        window.location.href = "neem_english.html"; // safe fallback
    }
}

// 🌐 Marathi button
function goToMarathi() {
    const tree = getTree();

    if (tree === "neem") {
        window.location.href = "neem_marathi.html";
    }
    else if (tree === "nirgundi") {
        window.location.href = "nirgundi_marathi.html";
    } 
    else if (tree === "shatavari") {
        window.location.href = "shatavari_marathi.html";
    } 
    else if (tree === "chafa") {
        window.location.href = "chafa_marathi.html";
    } 
    else if (tree === "amrutvalli") {
        window.location.href = "amrutvalli_marathi.html";
    } 
    else {
        window.location.href = "neem_marathi.html"; // safe fallback
    }
}

// 🔙 Back button
function goBack() {
    window.location.href = "index.html";
}

// 🌟 Show tree name on language selection page (NO UI CHANGE)
window.onload = function () {
    const tree = getTree();

    const treeNames = {
        neem: "Neem / नीम",
        nirgundi: "Nirgundi / निरगुंडी",
        shatavari: "Shatavari / शतावरी",
        chafa: "Chafa / चाफा",
        amrutvalli: "Amrutvalli / अमृतवेली"
    };

    if (tree && treeNames[tree]) {
        const title = document.getElementById("treeTitle");
        if (title) {
            title.innerText = "Select language for " + treeNames[tree];
        }
    }
};
