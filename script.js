// Skills - Show more
const showMoreSkills = document.getElementById('showMoreSkills');
if (showMoreSkills) {
    showMoreSkills.onclick = function() {
        document.getElementById('moreSkills').style.display = 'block';
        showMoreSkills.style.display = 'none';
    }
}

// Travels - Show map
const showMap = document.getElementById('showMap');
if (showMap) {
    showMap.onclick = function() {
        document.getElementById('map').style.display = 'block';
        showMap.style.display = 'none';
    }
}

// Hobbies - Show quote
const showHobbyQuote = document.getElementById('showHobbyQuote');
if (showHobbyQuote) {
    showHobbyQuote.onclick = function() {
        document.getElementById('hobbyQuote').style.display = 'block';
        showHobbyQuote.style.display = 'none';
    }
}