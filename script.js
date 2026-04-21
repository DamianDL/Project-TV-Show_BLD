//You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();

  // update the count in the html header
  const countDisplay = document.getElementById("episode-count");
  countDisplay.innerText = `Got ${allEpisodes.length} episode(s)`;

  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const template = document.getElementById("episode-template");

  rootElem.innerHTML = ""; // clear the container

  episodeList.forEach((episode) => {
    // clone the template structure
    const clone = template.content.cloneNode(true);

    // select the specific parts of the clone to update
    const title = clone.querySelector(".episode-title");
    const img = clone.querySelector("img");
    const summary = clone.querySelector(".episode-summary");

    // populate with data
    const episodeCode = formatEpisodeCode(episode.season, episode.number);
    title.textContent = `${episode.name} - ${episodeCode}`;
    img.src = episode.image.medium;
    img.alt = episode.name;
    summary.innerHTML = episode.summary;

    // add the finished clone to the page
    rootElem.appendChild(clone);
  });
}

// creating and formatting episode code.
function formatEpisodeCode(season, number) {
  const s = String(season).padStart(2, "0");
  const e = String(number).padStart(2, "0");
  return `S${s}E${e}`;
}

window.onload = setup;
