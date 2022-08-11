/* .js files add interaction to your website */
var learnMoreButton = document.getElementById("learnMore");
var takeActionButton = document.getElementById("takeAction");
if (learnMoreButton) { //only do this if the button exists
  learnMoreButton.addEventListener('click', moveToLearnMore);
  takeActionButton.addEventListener('click', moveToTakeAction);
}

function moveToLearnMore () { //moves to the Learn More Page
  location.href="learnMore.html";
}
function moveToTakeAction () { // Moves to the What is it Like page
  location.href="takeAction.html";
}

var count = 1; //counts which part of the story you are on
var textBox = document.getElementById("textChange");
var beginButton = document.getElementById("begin");
var continueButton = document.getElementById("continue");
if (beginButton) { // only add these if the button exists
  continueButton.disabled = true;
  beginButton.addEventListener('click', startStory);
  continueButton.addEventListener('click', updateStory);
}
var name;
var fam;

function startStory () { // sets the user input and displays first part of story
  name = document.getElementById("nameInput").value;
  fam = document.getElementById("famInput").value;
  textBox.innerHTML = "Here is a puppy named " + name + ". " + name + " is a puppy just bought from a pet store, and now they’re going to live with the " + fam + " family. " + name + " trembles violently in the arms of their new family, staring around the car they are inside of. It is big and wide, and there are so many things " + name + " has never seen before. So many new smells and sounds that terrify " + name + ", just as they did at the pet store.";
  beginButton.disabled = true;
  continueButton.disabled = false;
  count++;
}

function updateStory () { //updates the story to match whichever part the person is on
  if (count == 2) {
    textBox.innerHTML = "Everything about the world outside is scary. " + name + " was born inside a cage—a tiny cage, along with "+ name +"’s four siblings. There was nothing inside that cage except the five puppies, their mother, and a food bowl. The floor was covered in feces and urine, and all around them were dogs in the same position. As " + name + " was in a cage on the bottom, the pee from the dogs on top of them all trickled into "+ name + "’s cage.";
  } else if (count == 3) {
    textBox.innerHTML = "For six weeks, " + name + "’s cage was their whole world. " + name + " had no toys, no space to move, no way to have fun. " + name + " spent every waking moment staring at everything and nothing. Their ears bothered them constantly, for " + name + " had contracted an infection, but they got used to it. No was was going to help " + name + ". That was just how life was.";
  } else if (count == 4) {
    textBox.innerHTML = name + " was taken out of that cage at just six weeks old, thrusted into a whole new world. Everything was new, from the blue sky to the green forests, and " + name + " was absolutely terrified.";
  } else if (count == 5) {
    textBox.innerHTML = "So when " + name + " arrives at the " + fam + " home, they are hesitant to do anything. " + name + " immediately hides in the closest quiet place they can find, which happens to be the bathroom. The rest of the house is too large, too bustling for " + name + "’s comfort, so they never leave the room of their own volition.";
  } else if (count == 6) {
    textBox.innerHTML = "The " + fam + "s tries to spend time with " + name + ", but everything they do is scary. When they show them a new toy, " + name + " flinches away from it before investigating. " + name + " barks and whimpers at couches and chairs, having never seen them before. If someone tries to pick " + name + " up, they bite, having rarely been picked up by humans in their life.";
  } else if (count == 7) {
    textBox.innerHTML = "The " + fam + "s get mad when " + name + " pees in random places, and their voices scare " + name + " away. " + name + " has always lived in their own excrement anyway, so why would they choose where to go? The " + fam + "s try to house train " + name + ", but the mannerisms they use don’t make sense to " + name + " at all—" + name + "’s parents weren’t very good at learning commands either, so their genes passed on to " + name + ".";
  } else if (count == 8) {
    textBox.innerHTML = "Those weren’t the only genes that passed on—as time goes on, " + name + " starts to have hip problems. The " + fam + "s take them to the vet, and leave with a multitude of bills. The vet has diagnosed " + name + " with several conditions and diseases that the " + fam + " family had no idea about, and " + name + " is put on several medications. Even as time goes on, " + name + "’s life does not get easier.";
  } else if (count == 9) {
    textBox.innerHTML = "Eventually, " + name + " contracts an illness that they can’t come back from. It was entirely preventable through getting a vaccine, but the puppy mill never bothered to get " + name + " up to speed. " + name + " has to fight the disease for the rest of their life, alongside their other problems. " + name + " and the " + fam + "s try to make the most of it, but there are always medical problems to worry about.";
  } else if (count == 10){
    textBox.innerHTML = "If " + name + " had been born in the home of a good breeder; if " + name + "’s mother had been treated better and given a better home; if the dogs around " + name + " were kept up to date on all their medicines; if " + name + "’s parents’ genetics had been monitored more closely; if puppy mills were forced to treat their dogs like living creatures, " + name + " would have had a perfectly happy life with the " + fam + "s.";
  } else {
    textBox.innerHTML = "But " + name + " was born in a horrible establishment that treats dogs like cash crops. " + name + " struggled throughout their entire life because of the abuse from puppy mills.";
    continueButton.disabled = true; //last part of story, so no need for the button anymore
  }
  count++; //moves on to the next part of the story
}
