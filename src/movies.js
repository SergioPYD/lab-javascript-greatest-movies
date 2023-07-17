// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsName = moviesArray.map((element) => {
    return element.director;
  });
  console.log(directorsName);
  return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergMovies = moviesArray.filter((element) => {
    if (
      element.director === "Steven Spielberg" &&
      element.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  });

  console.log(spielbergMovies);
  let onlySpielbergMovies = spielbergMovies.map((element1) => {
    return element1.title;
  });
  console.log(onlySpielbergMovies);
  return onlySpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let scores = moviesArray.reduce((avg, elementos) => {
    if (elementos.score !== undefined) {
      return avg + Number(elementos.score);
    } else {
      return avg;
    }
  }, 0);
  let avgScore = scores / moviesArray.length;
  let avgScore2 = avgScore.toFixed(2);

  let avgScore3 = parseFloat(avgScore2);
  console.log(avgScore3);
  return avgScore3;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((element) => {
    if (element.genre.includes("Drama")) {
      return true;
    } else {
      return false;
    }
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let dramaScores = dramaMovies.reduce((avg, elementos) => {
    if (elementos.score !== undefined) {
      return avg + Number(elementos.score);
    } else {
      return avg;
    }
  }, 0);

  let avgScoreDrama = (dramaScores / dramaMovies.length).toFixed(2);

  console.log(avgScoreDrama);
  return parseFloat(avgScoreDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneMovies = JSON.parse(JSON.stringify(moviesArray));

  cloneMovies.sort((elem2, elem1) => {
    if (elem2.year > elem1.year) {
      return 1;
    } else if (elem2.year < elem1.year) {
      return -1;
    } else {
      if (elem2.title < elem1.title) {
        return -1;
      } else if (elem2.title > elem1.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return cloneMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clonetwentyMovies = JSON.parse(JSON.stringify(moviesArray));
  clonetwentyMovies.splice(20);
  console.log(clonetwentyMovies);
  let onlyNameMovies = clonetwentyMovies.map((eachMovie) => {
    return eachMovie.title;
  });
  if (onlyNameMovies.length > 20) {
    onlyNameMovies.splice(20);
  }
  onlyNameMovies.sort((title2, title1) => {
    if (title2 > title1) {
      return 1;
    } else if (title2 < title1) {
      return -1;
    } else {
      return 0;
    }
  });
  console.log(onlyNameMovies);
  return onlyNameMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
