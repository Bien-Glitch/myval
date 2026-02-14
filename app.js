const vals = {
	omega: {
		message: `
			Happy Valentine’s Day, my dear 🤍
			Sometimes I sit and think about us as little girls.
			When your parents will lock you inside the house and I will stay by the stairs just to play with you.
			And the moment you stepped out, it was like freedom had arrived.
			Game start. Dodging ball. Square. Running, laughing, arguing, making up.
			Those days were simple, but they were full. And you were always there, calm, bold and gentle.
			Even though life has taken us on different paths and into different seasons, I still see your heart.
			It still glows with so much love, warmth, and sincerity. That hasn’t changed.
			You taught me intentionality without even trying. The way you cared. The way you stood firm but still stayed soft. The way your heart always glowed with so much love. That stayed with me.
			Today, I just want you to know that I see you. I appreciate you. And I choose you, with the same intentionality you once showed me. No matter how far life stretches us, I stand with you in love and gratitude.
			Some friendships are loud. Ours is steady. And that means everything to me.
			Happy Valentine’s Day, my forever friend 🤍✨
		`,
		image: `./people/omega.png`
	},
	amarachi: {
		message: `
			Happy Valentine’s Day, my dearest sister ❤️
			On this special day of love, I just want to remind you how grateful I am to have you in my life. You are more than a sister to me, you are my safe place, my confidant, my partner in laughter, and sometimes even my voice of reason.
			Through every high and low, every joy and challenge, you’ve stood by me with strength, kindness, and a heart so pure. Your love is the quiet kind that shows up, stays consistent, and never asks for applause. And that’s the most powerful kind of love there is.
			Thank you for the memories we share, the secrets we keep, the fights we laugh about later, and the unbreakable bond that only we understand. No matter where life takes us, I will always be proud to call you, my sister.
			Today, I celebrate you, your beautiful heart, your resilience, your dreams, and the light you bring into my world.
			I love you endlessly. Happy Valentine’s Day 💕🌹
		`,
		image: `./people/amarachi.png`
	},
	ufuoma: {
		message: `
			Happy Valentine’s Day to my dearest Ufuoma ❤️😂
			My loving, bold, slightly crazy bestie… where do I even start?
			You’re the drama. The noise. The chaos. The fire.
			And somehow, I’m the calm one standing beside you like, “it’s okay, breathe” while secretly enjoying every second of your madness 😌😂
			You love loudly. You defend fiercely. You show up unapologetically. And that’s one of the things I admire most about you. Your heart is so big, and you don’t even try to hide it.
			It still makes me laugh how some people really tried to break our friendship like it was that easy 😭 as if what we have is ordinary. What they don’t understand is that this isn’t just friendship. It’s loyalty. It’s understanding. It’s choosing each other even when the world is weird.
			You match my calm with your noise.
			You pull me out of my deep thoughts and make me laugh when I’m trying to be serious.
			And somehow, we just make sense.
			Thank you for loving me loudly. Thank you for standing by me. Thank you for being bold enough for both of us when I’m being too calm and reflective.
			No matter what season we enter, I choose you as my best friend again and again.
			Happy Valentine’s Day, my person 💕
			Nobody can separate what God has glued with madness and love 😂🤍
		`,
		image: `./people/ufuoma.png`
	},
	kizito: {
		message: `
			Happy Valentine’s Day, old man 😌😂❤️
			I just had to remind you today how much I appreciate you.
			Thank you for always being supportive, for always listening, and for giving me advice like the wise elder that you are 😌 (don’t worry, I won’t mention your advanced age too much today).
			You’ve shown up for me in ways that really matter. Your words, your guidance, your steady presence, they don’t go unnoticed. You’re sweet in a quiet, genuine way, and that’s rare.
			I tease you a lot, but honestly, I respect you even more than I joke about you. You’ve been a real friend, one who is consistent, thoughtful, and kind.
			So today, I’m celebrating you.
			Thank you for being my personal life consultant, my supportive friend, and thank you for always motivating me to do better and yes you are my favorite “older” human 😂
			Happy Valentine’s Day 🤍
		`,
		image: `./people/kizito.png`
	},
	esli: {
		message: `
			Happy Valentine’s Day 🤍
			First of all yes, I know you’ve been disturbing me about your Valentine’s gift 😭 please rest. We’ll address that matter later.
			But truly, I just want to say I’m really grateful for you.
			I know this season hasn’t been the easiest for you, and even so, you’ve still been supportive, still checking in, still being kind. That says so much about your heart. You don’t even realize how strong you are.
			You’re stronger than this moment. This is just a chapter, not your whole story.
			Today isn’t just about celebrating love, it’s about reminding the people we care about that they matter. And you matter. Your heart, your effort, your resilience all of it counts, even when things feel heavy.
			I’m rooting for you. I’m standing with you. And I believe this season will pass.
			And since you’re so concerned about Valentine’s gifts, here’s one for now:
			My prayers, my support, and my premium friendship subscription, valid for life 😌😂
			Happy Valentine’s Day. You’re appreciated more than you know 🤍✨
		`,
		image: `./people/esli.png`
	},
	chidinma: {
		message: `
			Happy Valentine’s Day Chibaby 🤍✨
			It’s actually funny how life just casually brings cool people into your space like it’s no big deal.
			We just started getting close, but I’m really glad we did. You’re such a vibe, calm, easy to talk to, and effortlessly cool. The kind of person you just enjoy being around without even trying too hard.
			I appreciate the conversations, the laughs, and the energy you bring. It feels natural, and that’s rare.
			So yes, consider this your official Valentine appreciation message 😌 don’t let it get to your head too much though.
			Happy Valentine’s Day 🤍✨ Stay cool (but not cooler than me).
		`,
		image: `./people/chidinma.png`
	}
};

let personFound = false;
const getUrlParams = (query,key) => (new URLSearchParams(query.startsWith('?') ? query : location.search)).get(!query.startsWith('?') ? query : key);
const valParam = getUrlParams('val');

for (const person in vals) {
	if (person === valParam) {
		const notes = document.querySelector('.notes');
		const img = document.querySelector('.img-wrapper > img');
		const val = vals[person];
		
		img.src = `./people/${person}.jpeg`;
		
		if (person.toLowerCase() === 'ufuoma' || person.toLowerCase() === 'chidinma')
			img.style.objectPosition = 'center center';
		else
			img.style.objectPosition = 'center top';
			
		notes.textContent = val.message;
		personFound = true;
		break;
	}
}

const emojis = ["❤️", "🎉", "🎊"];

function createEmoji() {
	const emoji = document.createElement("div");
	emoji.classList.add("emoji");
	
	emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
	
	// Random horizontal start
	emoji.style.left = Math.random() * 100 + "vw";
	
	// Random size
	emoji.style.fontSize = (20 + Math.random() * 40) + "px";
	
	// Random duration
	const duration = 5 + Math.random() * 5;
	emoji.style.animationDuration = duration + "s";
	
	document.body.appendChild(emoji);
	
	// Remove after animation
	setTimeout(() => {
		emoji.remove();
	}, duration * 1000);
}

// Create emojis continuously
setInterval(createEmoji, 500);

if (!personFound) {
	const body = document.body;
	const main = document.querySelector('main');
	const errorDiv = document.createElement('div');
	
	
	errorDiv.classList.add('error');
	errorDiv.innerHTML = `Oops You have reached the end!`
	
	main.remove();
	body.appendChild(errorDiv);
}
