const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FOLLOW: Symbol("follow"),
    SERENA: Symbol("serena"),
    JUMP: Symbol("jump"),
    VILLAGE: Symbol("village"),
    NEW: Symbol("new"),
    CLIMB: Symbol("climb"),
    HELP: Symbol("help"),
    DREAM: Symbol("dream"),
    SNAKE: Symbol("snake"),
    HOME: Symbol("home"),
    RAID: Symbol("raid"),
    PASSAGEWAYS: Symbol("passageways"), 
    ORDER: Symbol("order"),
    PLATFORM: Symbol("platform"),
    SHARE: Symbol("share"),
    ALONG: Symbol("along"),
    PYRAMID: Symbol("pyramid"),
    PHONE: Symbol("phone")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You've just landed in Cairo, Egypt. You're here to visit your Uncle Bruce, who's " +
                    "a scientist. You're waiting at the airport  baggage claim when a man that you recognize from your " + 
                    "flight hands you a note. In red ink, the note says 'BEWARE THE SPINX'. The man you gave you the note " +
                     "has disappeared towards the taxi stand. Do you follow him or go to your hotel?";
                this.stateCur = GameState.FOLLOW;
                break;

                case GameState.FOLLOW:
                if(sInput.toLowerCase().match("follow")){
                    sReply = "You arrive just in time to see the strange man leaving in a taxi. You hop into the next cab " +
                    "at the stand and quickly use your translator app to ask the driver to follow him. " +
                    "Your driver manages to keep up, until the strange man gets out at a crowded square. You give your " +
                    "driver a generous tip, and chase the strange man into a cafe. The cafe is dark, with loud, rhythmic music " +
                    "and strong incense. You've lost the man you were following, but your eyes are still adjusting to the darkness. " +
                    "A waiter brings you a pot of thick, strong coffee, which you sip slowly while adjusting to the ambiance. Gradually " +
                    "your arms and legs get very heavy. You feel dizzy, and then pass out.  " +
                    "When you wake up, you're chained by the ankle to a cot in a small store room. You can still here the music " +
                    "from the cafe, and you can see a thin crescent moon through a small window high above you on the wall. It was " +
                    "daytime when you arrived, so a few hours must have passed. The door opens " +
                    "slightly, and you recognize a dancer from the cafe. She whispers 'My name is Serena. I will help you escape,' as she " +
                    "deftly uses a thin metal rod to pick the padlock on your ankle chain. Serena climbs out through the window gracefully " +
                    "then offers her hand to help you get out through the window. Do you accept Serena's help or try to escape through the " +
                    "door that she entered through?";
                    this.stateCur = GameState.SERENA;
                } else {
                    sReply = "You toss your bag into the back of a cab and hand the driver the page you printed with the hotel's address. " +
                    "She drops you off at the Star & Crescent Hotel, where you see your aunt Andrea waiting in the lobby. You check in and " + 
                    "take elevator up to your room. As you approach the room, the door is slightly ajar and appears to close. It might have " +  
                    "been the wind, but there aren't any windows open and you're on edge because of the note from the airport. Do you ask for " +
                    "new room or decide you're imagining things?";
                    this.stateCur = GameState.NEW;
                }
                break;
            
                case GameState.SERENA:
                if((sInput.toLowerCase().match("accept")) || (sInput.toLowerCase().match("serena"))){
                    sReply = "You take Serena's hand and find your way onto the roof. Just it time! You can hear angry voices " +
                    "entering the room. Serena shouts, 'They're coming after us! Quickly, jump across to the next roof.' It's a "+
                    "long way to jump, and you're several stories up. Do you jump or take a chance with the people following you?"
                    this.stateCur = GameState.JUMP;
                } else {
                    sReply = "You pull open the door and dash down a corridor back to the cafe. Two men are right on your tail, shouting in Arabic. " +
                    "Fortunately, there is a dense crowd and you manage to blend in. On your right, you notice an open door with a courtyard on the " +
                    "other side. You dart through the door and quickly close it behind you. You pause to catch your breath and notice a hulk of a man " + 
                    "with a thick beard and piercing eyes. 'Welcome!' he says warmly. 'Are you here for a spell or a potion?' 'I need your help!' you " +
                    "say. 'Someone is after me.' The man reveals that his name is Al-Din, and he explains that his magic will protect you here. You " +
                    "follow Al-Din up a flight of stairs and he offers you some mint tea and tells you about the ancient magic that he practises. 'Close "+ 
                    "your eyes and repeat this spell 3 times: Abah arah arah abah blah ah.' You follow the instructions. The room begins to spin around you " +
                    "then gradually fades away. You awaken in your living room back home! This is really strange - was the whole thing a dream or was the magic real?";
                    this.stateCur = GameState.DREAM;
                }
                break;
            
                case GameState.JUMP:
                    if(sInput.toLowerCase().match("jump")){
                        sReply = "You take the leap and just barely make it. Serena makes the jump with ease. Impressed, you ask 'Are all " +
                        "belly dancers as strong as you are?' She explains that she was trained as an acrobat, but was kidnapped by the evil " +
                        "gang that owns the cafe. Since the gang controls this quarter of Cairo, she had to wait for her family to find her and " +
                        "arrange her escape. You follow Serena down a flight of stairs to ground level and through dozens of narrow alleys before " + 
                        "you lose your pursuers. Serena points to a donkey cart just ahead, and shows you how to crawl into the bottom of it. 'It " +  
                        "will take us to my village. I think you can get out and find your way from here, but you're also welcome to continue to the " +
                        "village with me.' Do you want to get out of the cart or go to the village?";
                        this.stateCur = GameState.VILLAGE;
                    } else {
                        sReply = "The gap is just too wide - you'd never make it across. Serena seems to be long gone. You turn a face your pursuers. " +
                        "To your amazement, you recognize them. It's your Uncle Bruce and Aunt Andrea! 'Bruce! Andrea!' you exclaim. 'How did you get here? '" +
                        "They explain that the cab driver who dropped you off was worried and had gone to the police, who tracked Bruce and Andrea down. The " +
                        "three of you return to the hotel room, and you enjoy the rest of your trip in peace. THE END";
                        this.stateCur = GameState.WELCOME;
        
                    }
                break;

                case GameState.VILLAGE:
                    if((sInput.toLowerCase().match("out")) || (sInput.toLowerCase().match("get out"))){
                        sReply = "You thank Serena for her help and slip out of the cart. Where are you? The landscape is eerie, " +
                        "lit only by the pale moonlight. You see small, deserted buildings and narrow streets stretching in all "+  
                        "directions. You wander until you find a dingy corner store and use your translator app to ask to borrow " + 
                        "their phone. You call your uncle and describe the area. He says that he knows exactly where that is and sends " +
                        "a cab to pick you up. After spending a few days with your uncle, you return home. THE END" ;
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "Since you really don't know where you are, you think that it's safer to stick with Serena. You " +
                        "ride for a few hours and drift off to sleep. When Serena wakes you, she explains that you've arrived at her " +
                        "village. You stumble out of the cart and find yourself near a field. There is a large bonfire surrounded by " +
                        "hundreds of figures in white turbans and white robes, chanting in unison. The figures rise and begin a strange, " +
                        "slow dance. The hypnotic effect draws you in and you join the circle. You enjoy several days in the village, with " +
                        "a tribe that you learn is called the Dervishes. Eventually, your aunt and uncle arrive at the village. 'Thank goodness " +
                        "you're alright, ' says Bruce 'we were really worried! We'd followed your path to the cafe, then you disappeared. It's " +
                        "probably best if you go home now. THE END";
                        this.stateCur = GameState.WELCOME;
        
                    }
                break;

                case GameState.NEW:
                    if((sInput.toLowerCase().match("new")) || (sInput.toLowerCase().match("ask"))){
                        sReply = "The clerk begrudgingly moves you to a different room. Andrea asks why you had to move and you " +
                        "tell her about the note. 'I think that's a bunch of nonsense' she scoffs, 'but you do you.' Soon your uncle " +
                        "Bruce arrives, and he agrees that you should trust your gut about these things. Bruce suggests going to the gorgeous " +
                        "Sahara Club with its infamous belly dancers tonight, and you enthusiastically accept. You enjoy a lovely evening on " + 
                        "the town, then fall asleep instantly upon returning to the hotel. At dawn, you're startled awake by the sound of a " +
                        "struggle coming from Bruce's adjacent room. You run over, but aren't fast enough. Bruce is gone and the room is a " +
                        "mess! There are sheets trailing across the floor and drops of blood in a few places. Seeing that the window is broken, " + 
                        "you look down onto the street and see two men loading a large basket into a truck. You think that you recognize one " + 
                        " of the men as the one who gave you the note at the airport, and you have an uneasy feeling that your uncle Bruce is " +
                        "in that basket. Should you climb down the building or call the police? "  ;
                        this.stateCur = GameState.CLIMB;
                    } else {
                        sReply = "You're just imagining things. You unpack your things and get comfortable. Bruce suggests going to the gorgeous " +
                        "Sahara Club with its infamous belly dancers tonight, and you enthusiastically accept. You enjoy a lovely evening on " + 
                        "the town, then fall asleep instantly upon returning to the hotel. In the early morning, an inner instinct suddenly awakes you, " +
                        "and you find yourself face-to-face with an asp, one of the deadliest snakes in the world. Do you grab you pillow and try to smother " +
                        "the snake or back off slowly and call your uncle for help?";
                        this.stateCur = GameState.SNAKE;
        
                    }
                break;

                case GameState.CLIMB:
                    if((sInput.toLowerCase().match("new")) || (sInput.toLowerCase().match("ask"))){
                        sReply = "You climb down to the street, being careful not to look down. You can spot the truck about a block away, stuck in traffic. " +
                        "You run to catch up to it. Out of breath, you reach the back of the truck and struggle to open the door. They fly open, pushing you " +
                        "back on to the street where you bang your knee. Hoping on one leg, you pull yourself back onto the truck. As you're about to open the " + 
                        "basket, the truck jerks to a stop. The kidnappers have entered the back of the truck and you're boxed in. There's no point in calling " +
                        "for help - no one could hear you over the street noise. You have to save yourself and Bruce! As you reach over to grab a loose piece of " +
                        "pipe, one of the men whacks you in the head from behind with something hard. You wake up in a small room with your hands and feet tied. " +
                        "Uncle Bruce is tied up next to you. You ask him if he knows where you are, and he says that you're on a plane, and that he suspects you've " +
                        "been kidnapped by the infamous Dr. Ptah. Before you can ask any more questions, the plane has landed. You're dragged out of the plane and " + 
                        "you find yourself on a long, narrow, sandy island with a pyramid at the opposite end. The guards cut the ropes on your hands and feet and you " +
                        "hear another ordering 'Take them to the throne room!'. You start marching towards the pyramid. Eventually you arrive at the throne room. It's " +
                        "large, circular, and ornately decorated. A short man with a large turban, over loaded with jewels and feathers, calming says 'I'm so glad that " +
                        "you've accepted my invitation. I'm Ptah. With your help, I plan to build a particle-beam ray gun and use it to conquer the world. If you refuse " +
                        "to help me, you'll be imprisoned here forever.' Do you pretend to help Ptah in order to buy time, or will you try to escape post haste? ";
                        this.stateCur = GameState.HELP;
                    } else {
                        sReply = "You run down to the lobby and ask the desk clerk to phone the police. She clicks for the operator, and moments later " +
                        "a police officer enters the hotel lobby. The shocked clerk looks at home openmouthed. 'Inspector ... Inspector Ahmed?!' the clerk " +
                        "sputters. 'What's the trouble here?' asks the officer. You say that your uncle has been kidnapped. 'Is you uncle Bruce Hockney?' the " +
                        "officer inquires. 'How did you know?' 'I've been suspicious that something like this might happen ever since he arrived.' You tell the " +
                        "officer about the truck that you saw, and you both run to the back entrance, but the truck is gone. You know you shouldn't have waited! " +
                        "'Your uncle was kidnapped by an ancient terrorist organization, the Society of Assassins. They want to use his energy research for their " +
                        "evil plans.' You go to look for your aunt Andrea, but she is missing too! The officer takes you to his office, and shows you photos of the " +
                        "assassins. You're not surprised to see the man from the airplane among them. The officer tells you that a paratrooper strike is planned on " +
                        "assassins' hideout. He says that it's very dangerous. Do you insist that you go along with the raid or stay out of it?";
                        this.stateCur = GameState.RAID;
        
                    }
                break;
                    
                case GameState.HELP:
                    if((sInput.toLowerCase().match("pretend")) || (sInput.toLowerCase().match("help"))){
                        sReply = "To Ptah's delight? Bruce agrees to cooperate. He's sent to work in the underground laboratory. Three weeks later, the ray gun is ready " +
                        "to be tested. As the gun is about to be shot, Bruce slips some ear plugs into your hand. 'Put these in your ears when I give you the signal' " +
                        "he whispers. Technicians start moving instruments around to activate the ray gun. A whirring sound starts very low and quiet, gradually getting " +
                        "louder and higher in pitch. Soon it begins to hurt your ears; your arms and legs become numb and your vision blurs. 'NOW!' Bruce shouts, and you " +
                        "put in your ear plugs. Everything goes back to normal, but Ptah and his associates have lost consciousness. Bruce turns to you and says 'Let's go " +
                        "down to the dock. The guards there will be unconscious too, and there's a boat that we can take to get back to Cairo.' You've escaped! THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "'Even if we try to co-operate' you say, 'Ptah will finish us off as soon as we stop being useful. We should just escape right now.' Bruce " +
                        "nods in agreement. On a count of three, you each attack a guard, trying to take them by surprise. Though the guards are taken by surprise, they " +
                        "outnumber you. The guard overpower you and drag you back to Ptah. 'Take them to the end of the island!' he shouts. You're tied up and carried off " +
                        "to a small compartment on a resupply ship. You and Bruce discuss it, and figure that you'll need much more luck than you're likely to get to evade " +
                        "this situation. THE END.";
                        this.stateCur = GameState.WELCOME;
        
                    }
                break;
                
                case GameState.DREAM:
                    if((sInput.toLowerCase().match("dream"))){
                        sReply = "It was all a dream. THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "Wow - that was quite an experience. You look forward to telling everyone about it. THE END";
                        this.stateCur = GameState.WELCOME;
        
                    }
                break;

                case GameState.SNAKE:
                    if((sInput.toLowerCase().match("pillow")) || (sInput.toLowerCase().match("smother"))){
                        sReply = "You wrap the pillow around the snake and hurl the bundle into you closet then slam the door shut. After your heart stops " +
                        "pounding, you get you uncle and tell him about the snake. 'Oh no!' he says 'that was a warning. It seems like someone is out to get us. " +
                        "You should go back home before something else happens.' Do you go home or insist on staying?";
                        this.stateCur = GameState.HOME;
                    } else {
                        sReply = "The door to Bruce's room flies open when you yell. 'Let's get out of here fast—and I mean fast!' Bruce makes an end run around " +
                        "the snake and out the door to the hallway, pushing you ahead. He slams the door shut. BLAM! There is a sharp explosion from Bruce's room. " +
                        "People in nightclothes come staggering half-awake out of their rooms. You meet Andrea in the hallway. She tosses a long native jacket to you. " +
                        "Quickly you throw it on. 'We'll take the back stairway down to the basement,' says Bruce. 'I have a special car—built for my underwater " +
                        "exploration of the Nile—down there.' When you get there, the three of you jump into the car, and Bruce starts it up. He heads directly for " +
                        "the wall! At the last moment an electronically controlled door opens, and the car shoots into a pool of water on the other side of the door. The " +
                        "car sinks until it is completely underwater, and then it starts forward. The submersible car journeys up the river, just under the surface of the " +
                        "water.‘Not long ago,’ says Bruce, ‘I discovered the entrance to an underwater tunnel that goes from the Nile to the famous step pyramid at Sakkara. " +
                        "They say Imhotep's tomb is there. I haven't had a chance to explore this tunnel until now.’ When you reach Sakkara, the car enters the underwater " +
                        "tunnel. Soon you surface on a broad lake in an underground cavern. In the center of the lake is an island, and in the center of the island is a small " +
                        "pyramid about thirty feet high. It is made of a dull, silvery metal—perhaps platinum. Bruce steers the car to the edge of the island. The three of you " +
                        "jump ashore. As you do,a large opening appears in the side of the pyramid. A voice comes from inside. ‘If you wish to know the secret of Imhotep, and the " +
                        "secret of the Pyramids,’ says the voice, ‘then all of you must step inside.’ ‘I guess it's all or nothing,’ says Bruce. Andrea and Bruce want to go in, " +
                        "which leaves it up to you. Do you go into the pyramid, or do you feel it might be a trap?"; 
                        this.stateCur = GameState.PYRAMID;        
                    }
                break;

                case GameState.HOME:
                    if((sInput.toLowerCase().match("home"))){
                        sReply = "You're relieved to arrive home, where there aren't usually poisonous snakes in your bed. THE END";
                        this.stateCur = GameState.HOME;
                    } else {
                        sReply = "Bruce finally agrees to let you stay awhile longer. ‘But we'll have to be very careful,’ he warns. Neither of you is in the mood to go back to sleep. " +
                        "You leave a note under Andrea's door and go down to the lobby. Even though it is only the earliest dawn, the back streets of Cairo are bustling with activity. " +
                        "At one of the broader intersections, you find a cab and direct the driver to take you to Giza. When you arrive, an Egyptian friend of your uncle is already there: " +
                        "Mr. Hassan, the Egyptian Director of Antiquities. It was Hassan who first persuaded your uncle to come to Egypt many years ago. The three of you look down into " +
                        "the deep pit that contains the entrance to the tunnel under the pyramid. Nearby the Sphinx sits in its ageless pose. ‘We had a slight problem finishing the tunnel,’ " +
                        "says Hassan. ‘The workmen claimed that the Sphinx itself spoke to them, saying 'Beware the Sphinx.'' ‘I got a note from a man at the airport that said the same thing!’ " + 
                        "you tell Hassan. ‘I showed it to Bruce yesterday.’ ‘Is this true?’ Hassan asks Bruce. ‘I'm afraid it is,’ Bruce answers. ‘However, the Sphinx is mute enough at the " +
                        "moment. As soon as the instruments are installed underground, we can start our experiments.’ ‘The electrical lines have not yet been strung in the tunnel,’ says Hassan, " +
                        "‘but I have a flashlight for each of us, and also a strong rope in case we need it. Now we are ready to descend.' You, Bruce, and Hassan climb down a ladder into the deep " +
                        "pit. At the bottom, a six-foot-square opening penetrates the side wall. A perfectly straight tunnel of the same dimensions goes into the rock—horizontal for a short way, " +
                        "then sloping sharply downward. The three of you enter it. A hand rope along the wall keeps you from slipping. Your flashlight beams cut into the darkness ahead. Finally you " +
                        "come to a circular room about twelve feet in diameter, directly beneath the center of the pyramid. ‘This is strange, very strange,’ says Hassan. ‘Yesterday this floor was " +
                        "completely smooth, almost polished. Now there is a pattern of cracks over here and part of the floor has sunk.’ Suddenly there is a cracking noise. ‘Get back to the tunnel!’ " +
                        "shouts Bruce. ‘The floor is caving in.’ The three of you just make it back into the tunnel when an explosion rocks the room and a section of the floor crashes into some " +
                        "unknown abyss below. Then there is silence. Clouds of dust rise from the gaping hole. You wait for several minutes, hardly daring to breathe. ‘I think that's all that is " +
                        "going to happen for the moment,’ says Hassan.‘Hold on to my legs,’ says Bruce. He crawls back into the room and leans over the edge of the opening, playing his flashlight " +
                        "down into the space below. ‘Seems to be some kind of chamber, probably an ancient tomb. The floor is about fifteen feet down. It's lucky we brought a rope along.’ ‘This is " +
                        "a great discovery!’ exclaims Hassan. ‘We must climb down at once.’ ‘I don't know if we should all go,’ says Bruce, looking at you. ‘We don't know what kind of a sticky " +
                        "situation we might be getting into. It might be better if you run back and bring help while Hassan and I climb down.’ Do you convince Bruce that you should share the discovery " +
                        "of the chamber or go back for help while they investigate?";
                        this.stateCur = GameState.SHARE;        
                    }
                break;

                case GameState.RAID:
                    if((sInput.toLowerCase().match("insist")) || (sInput.toLowerCase().match("raid"))){
                        sReply = "It's dangerous, but you can't let your uncle down. Inspector Ahmed says that you'll leave at dawn tomorrow. " +
                        "Until then, you'll be escorted by a bodyguard in a bulletproof vehicle. The inspector suggests spending the day " +
                        "touring the pyramids. Your driver, Mohammed, takes you there. You join a group tour, but it's very boring. Mohammed " +
                        "reveals that he used to work as a guide here and can show you some of the less popular passageways. Do you accept the " +
                        "invitation or stay with the bigger group?";
                        this.stateCur = GameState.PASSAGEWAYS;
                    } else {
                        sReply = "You tell Ahmed that you would rather go back to the hotel, try to find Andrea, and get her opinion before you do anything. You return to the hotel in a cab and check " +
                        "Andrea's room. No sign of her. You leave the hotel not quite knowing what to do. At the corner a native woman, with a dark veil covering her head and face, except for the eyes, " +
                        "beckons from a doorway. You are surprised to see that her eyes are pale gray. You are even more surprised when you hear her voice. The woman is Andrea in disguise! 'Follow me " +
                        "quickly,' she says. You have to run to keep up with her. She leads you through a labyrinth of teeming alleyways. Finally you reach a stone building with a heavy, carved door." + 
                        "Hurry inside,’ Andrea says, ‘and close the door behind you.’ The room you enter is dark, and it takes a few moments for your eyes to adjust to the light. When they do, you see " +
                        "Andrea in front of you with a revolver in her hand, silencer and all. The gun is pointed at you. ‘Kill! I must kill. . . . ‘ she says in a mechanical sounding voice. Her eyes are " +
                        "glassy, as if she were hypnotized. ‘Andrea, what are you saying?’ you gasp. ‘The secrets must be protected . . . must be protected. . . . ‘ she continues in that same strange voice. " +
                        "It sounds almost like a recording. You realize with a shudder that Andrea's mind has been taken over by some evil force. ‘Andrea!’ you shout. ‘I don't know any secrets. I don't even " +
                        "know what's going on. Someone has done something to you. You don't know what you are doing.’ She raises the gun to fire. ‘Andrea! No!’ you cry. But the pffut of the silencer ends it " +
                        "for you. THE END.";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;

                case GameState.PASSAGEWAYS:
                    if((sInput.toLowerCase().match("accept"))){
                        sReply = "You follow Mohammed into a narrow tunnel. At one point, he stops and feels alone the wall until he locates " +
                        "a loose stone, which reveals a very small, low door. Mohammed enters the long, horizontal shaft and indicates for you " +
                        "to follow him. Crawling on your hands and knees, you make your way through the shaft until it opens into a large square " +
                        "chamber. The walls are white and decorated with blue and gold hieroglyphs. There's a round hole in the center of the floor. " +
                        "'That is the Well of the Ancients' says Mohammed. 'It draws, not water, but wisdom and many other valuable things.' He gives " +
                        "you a small, triangular coin and tells you to drop it in the well to see how deep it is. You drop the coin, and wait for " +
                        "a full minute before a high, musical hum comes up from the well. You look for Mohammed but he seems to have disappeared. You " +
                        "start to lose you balance and fall down the well. Did Mohammed push you? You can't tell. You're strangely calm considering " +
                        "the circumstances. There's a gentle air flow that's acting as a parachute to slow your fall. Suddenly you land on your feet " +
                        "at the center of some sort of amphitheater. There's a circle of nine white-robed figures on large stone thrones around you. " +
                        "The figure on the largest throne speaks: 'We have been expecting you. You're currently at the lowest point of an inverted  " +
                        "pyramid, the exact mirror image of the one above. We are a magical order, hoping you'll join us. Your uncle is one of us, " +
                        "and he's in grave danger. Becoming a member with make you much better equipped to help him.' Do you join the order or not?";
                        this.stateCur = GameState.ORDER;
                    } else {
                        sReply = "‘I've had enough of being cooped up in narrow passageways under umpteen tons of rock,’ you say. ‘Very well,’ says Mohammed. " +
                        "‘Perhaps I can take you on a daytime tour of Cairo.’ You agree. After a couple of hours of walking through museums, touring ancient " +
                        "mosques and city walls, and looking at parks and monuments, you are very tired. Mohammed finds a colorful cafe on one of the broad " +
                        "boulevards in the modern section of Cairo where you can sit and watch the people go by. You have been sitting there for a while when " +
                        "you notice that Mohammed seems very uneasy. ‘Is anything wrong?’ you ask. ‘Do not move or look around. Several men who I believe are " +
                        "terrorists have surrounded us. How they found us, I do not know. They may have been following us for some time. I can try to get to a " +
                        "phone, or we can make a run for it. Since our chances are about the same either way, I will leave the decision up to you.’ Do you let " +
                        "Mohammed phone for help or make a run for the car?";
                        this.stateCur = GameState.PHONE;        
                    }
                break;

                case GameState.ORDER:
                    if((sInput.toLowerCase().match("join"))){
                        sReply = "'I'll join if it will help to rescue Bruce.' you say, more confidently than you feel. The speaker advises you " +
                        "to step on the triangle on the ground in front of you, which looks exactly like the coin that you dropped earlier. A " + 
                        "strong energy flows through your body and suddenly you're caught up in a whirlwind. You're body seems to dissolve and you " +
                        "take the form of a huge, glistening, all-knowing eye. The mysteries of the universe are now fully clear. Eventually your mind " +
                        "and body return to earth and you know exactly where Bruce is being held. You inform the police, leading them directly to the " +
                        "Assassins' hideout. From now on, you will find a whole new life of joy and danger. THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "‘I think I'll stay just the way I am,’ you say. ‘I'll find Bruce my own way.’ ‘Very well,’ says the speaker. ‘Obviously " +
                        "you were not meant to be one of the Chosen.’ ‘You're right,’ you say. ‘I don't... I don't...’ You can't complete the sentence—you " +
                        "feel yourself blacking out. You awaken outside the pyramid. You are lying on the ground, and Mohammed is putting a damp cloth on " +
                        "your forehead. ‘Ow! My head!’ you say as you try to sit up. ‘What happened in the pyramid? I don't remember.’ ‘You hit your head " +
                        "on the low doorway of that last room. You knocked yourself out,’ says Mohammed. ‘Do not be embarrassed. Many do it in the dim " +
                        "corridors within the pyramid.’ Just then your uncle and Andrea rush up with Ahmed. ‘Uncle Bruce!’ you exclaim. ‘Am I glad to see " +
                        "you. I thought you were a goner when they took you off in that truck.’ ‘We caught some of the gang members just as they were trying " +
                        "to smuggle your uncle out of the city,’ says Ahmed. ‘We also have reports that a severe sandstorm wiped out the terrorists' " +
                        "headquarters in the desert.’ Later, back at the hotel, Bruce tells you some disappointing news. ‘For some reason my instruments " +
                        "under the pyramid do not seem to be working properly. I think I'll have to go back to the States and redesign them. When I come back " +
                        "here the next time, do you want to come along again?’ ‘Now that is going to be hard to decide,’ you answer. THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;

                case GameState.PLATFORM:
                    if((sInput.toLowerCase().match("stay"))){
                        sReply = "You stay on the platform and the walls of the chamber re-form around you. The triangular screen reappears, and the images " +
                        "change and flash before you faster and faster. You see more pyramids being built. Now a different culture takes hold. You recognize " +
                        "the Romans in their military helmets. Christian crosses begin to appear. Churches are built, then swept away in a flash. You recognize " +
                        "the signs of Islam, the mosques with their minarets. Then you get a brief glimpse of Napoleon in his characteristic pose, hand in jacket, " +
                        "before the Pyramids. Then a sign of modern times: an airplane flies over. The screen fades for a moment. When the images continue, you see " +
                        "tall, strange-looking structures in the distance and flying machines of a design you don't recognize. The screen blurs  again. The Pyramids " +
                        "are still there, but the tall structures in the background are gone. The area behind the Pyramids—to the horizon—has been transformed into " +
                        "a green, tree-dotted park. Finally the screen goes blank. The monorail craft silently takes the three of you back to the room where you " +
                        "started. A few minutes later you are making your way toward the surface. ‘Remarkable!’ says Hassan. ‘That viewscreen took us back to ancient " +
                        "Egypt and then showed us all of the different periods of Egyptian history since.’ ‘Those last scenes are what amazed me,’ says Bruce. ‘Those " +
                        "flying machines we saw haven't even been invented yet, and that beautiful park replacing the desert around the Pyramids . . . ‘ You are the " +
                        "first to emerge from underground. What you see makes you gasp. Grass and parkland extend in all directions as far as you can see. Overhead are " +
                        "those flying machines of the future. THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "As you start to leave the platform, the approaching figure greets you. ‘My name is Imhotep. I greet you from the past’ ‘For a while there " +
                        "I thought we were in the past,’ you say. ‘No, I am not actually here at the moment, and you are not back in ancient Egypt. This is a recording—a three" +
                        "-dimensional hologram. My image is programmed to respond to individual personalities such as yours. Even though you may feel my arm as solid—here, I " +
                        "will touch your hand—it is only an illusion. It is too complex to explain, but your descendants will understand someday, just as you know that when " +
                        "you listen to a radio there are not little people in the box making the sounds.’ ‘You are the most celebrated character in Egyptian history,’ says " +
                        "Hassan. ‘You were—or are—the greatest genius that ever lived.’ ‘It is true that I gave your species a bit of help. I taught them the rudiments of " +
                        "architecture, farming, mathematics, engineering, and medicine. That was five thousand years ago. But I am not sure I was wise to do it. I will have " +
                        "to decide that when I find time to return. Your planet is in my study quadrant, but it is far out on the edge of the galaxy.’ As he speaks, the image " +
                        "of Imhotep seems to blur a bit. ‘I apologize for the brevity of our meeting,’ continues Imhotep. ‘I hope your civilization prospers. Someday you or your " +
                        "descendants will come across the vastness of space to visit me. You will be welcome. For now, farewell.’ The image begins to fade and you find yourselves " +
                        "back inside the pyramid room. The outside door reopens, and the three of you return the way you came. ‘I think we should keep this discovery a secret among " +
                        "the three of us,’ says Bruce. ‘I quite agree,’ Hassan says. ‘The world is not yet ready for this knowledge.’ You agree too. The next day you watch as workmen " +
                        "fill in the tunnel. When you leave the site, you go past the Sphinx. Perhaps you only imagine that it says: ‘You will be welcome someday' THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;

                case GameState.SHARE:
                    if((sInput.toLowerCase().match("share"))){
                        sReply = "One by one you, Bruce, and Hassan slide down the rope into the chamber below. It is a large room. In the center are huge chunks of rock " +
                        "and other debris that must have fallen from the ceiling. At one end of the room is a door leading to another chamber. As you approach the door it " +
                        "opens automatically. This startles all of you for a moment. Carefully you peer inside. You are hardly prepared for what you see. The room is " +
                        "illuminated with some kind of strange light. The walls and ceiling are made of a plastic material with a honeycomb pattern, and they seem to glow " +
                        "with an inner luminescence. In the center, perched on a glistening metal rail, is some kind of futuristic device. ‘That looks as if it might be a kind " +
                        "of monorail,’ says Bruce. ‘See, that big plastic bubble travels on the rail out through a circular tunnel on the far side. I've suspected for a long time " +
                        "that something like this might exist It confirms a theory of mine that ancient Egyptian culture was given a big boost by a more advanced one.’ The door of " +
                        "the bubble is open, and Bruce jumps inside. His hand sweeps over the complex control panel. ‘I think I see how this thing works,’ says Bruce. Let's give it a " +
                        "try. Of course, we don't know what dangers lie ahead. This time,’ Bruce says to you, ‘you definitely should stay behind to go for help—just in case we don't " +
                        "get back. Do you go along or stay behind to look for help?";
                        this.stateCur = GameState.ALONG;
                    } else {
                        sReply = "You go back up the shaft, using the hand rope to help pull yourself along. After a short way—it seems very soon this time—the shaft levels out. But " +
                        "you walk on and on—and see no exit. You stop and go back. You reach the point where the shaft goes down, but now the hand rope is missing. Where are you? In a " +
                        "panic you run back the other way. Your heart is pounding and your palms are sweaty. Now you edge carefully forward, pointing your flashlight down seemingly " +
                        "endless passageways. You reach a fork in the tunnel. You don't remember a fork there before! Your hands and knees are shaking, but you force yourself to go " +
                        "on. More forks! You have somehow blundered into a maze of tunnels. You stop for a moment to think. How can you possibly find your way out? Then you remember " +
                        "a rule to follow when you're trapped in a maze: 'Every time you reach a fork, turn right.' Remembering this calms your nerves somewhat. Now maybe you have a " +
                        "chance. Wearily you start to retrace your steps. You just hope that the rule works. At best you know that it will be a long walk. THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;

                case GameState.ALONG:
                    if((sInput.toLowerCase().match("go along"))){
                        sReply = "‘OK,’ says Bruce, ‘let's all three give it a shot.’ You feel a lot better " +
                        "going along than waiting alone in that spooky room. As soon as you are on board, Bruce pushes one of the buttons on the control panel. There is a " +
                        "whirring sound and the door of the strange craft slides shut with an ominous click. The bubble starts smoothly along the rail and into the tunnel. " +
                        "After a minute or so, it slows to a stop. The bubble door opens and the three of you climb out. You find yourselves in a chamber almost identical to " +
                        "the one you just left. However, this room seems to have no exit. This does not seem logical to you. Whoever created this transportation system would " +
                        "hardly have built it just for the ride. On a hunch, you feel carefully along the wall. Jackpot! Two triangular panels recess into the wall and slide " + 
                        "apart, revealing a large room with slanted walls. ‘Good work,’ says Bruce. The three of you enter. As you look around you realize that you are in a " +
                        "room shaped like the inside of a pyramid. Suddenly the triangular door closes behind you and disappears. You are trapped inside! The walls—four perfect " +
                        "triangles—begin to glow brighter and brighter. A screen slowly appears in one of the walls, and what looks like a movie about ancient Egypt begins. You " + 
                        "see a pyramid being built. Workers scurry about with ropes and long poles. But they do not carry the huge blocks of stone. The stones float through the " +
                        "air by themselves! A few of the workers carry devices which project a beam of light onto the blocks and cause them to rise in the air. Other workers toss " +
                        "ropes over the enormous floating blocks and lead them along, while the workers with the poles push the blocks gently into place. Amazing! ‘This looks like " +
                        "some kind of science-fiction movie,’ you say. ‘I don't think it's science fiction,’ says Bruce. ‘I think we're seeing the real thing.’ ‘Don't be ridiculous,’ " +
                        "says Hassan. ‘Every archaeologist knows that it took thousands of workers scores of years to build the Pyramids.’ Bruce shakes his head. ‘Those blocks weigh " +
                        "two to three tons each. They were fitted together so carefully that not even the thinnest piece of paper can be slipped into the joints. Does anyone really " +
                        "know how they got those blocks there?’ The picture blurs. A kind of fog drifts over the screen and then clears away. The pyramid is completed. But what a " +
                        "pyramid! It appears to be early morning. The top third of the pyramid is sheathed in gold, polished to a mirror finish. The rest of the pyramid is painted " +
                        "in iridescent colors in horizontal stripes clear to the bottom. The early sunlight strikes the top of the pyramid and throws a blinding shaft of light " +
                        "straight up into the sky. You are so fascinated by this scene that it takes you several minutes to realize that the triangular viewscreen is gradually growing " +
                        "larger. As you watch, the entire wall of the room becomes a viewscreen, and the other three walls vanish completely. The glowing floor remains, but you seem " +
                        "to be standing in ancient Egypt! A figure who appears to be a priest or high official seems to notice you from afar. He comes closer and beckons to the three " +
                        "of you. ‘If we leave this platform, do you think we can get back?’ you ask Bruce. ‘I have no idea how the mechanism operates,’ Bruce replies. ‘I'm not even sure " +
                        "we're any safer if we stay where we are.’ Do you stay put or leave the platform?";
                        this.stateCur = GameState.PLATFORM;
                    } else {
                        sReply = "Your uncle and Hassan go off in the strange bubblecraft. Now that they are gone, you wish you had insisted on going with them. It is lonely waiting " +
                        "by yourself. As you wait, you begin to hear some kind of humming. At first the sound is very low. Then it gets louder and louder. It seems to come from a " +
                        "specific spot on the wall. You walk toward it. Just as you get to the wall, a panel opens and reveals a lighted niche. Inside is a very elaborate and jeweled " +
                        "costume—a ceremonial costume of ancient Egypt. The humming grows even louder now. You feel compelled to exchange your clothes for the long robe, the headdress, " +
                        "and the sandals in front of you. You put them on. You want to stop yourself, but you can't. When you are finished dressing, the niche widens to become a door. " +
                        "You step into a large chamber. You find that the humming comes from a chorus gathered around a large stone sarcophagus. Inside this is a coffin in the shape of a " +
                        "person. The lid floats a few feet in the air. On one end of the lid is a lifelike sculpture in gold. With a shock you recognize it. It is your own face. Against " +
                        "your will you walk up a short flight of stairs. Your mind struggles against it, but the movements of your body are no longer in your control. You lie down in the " +
                        "coffin. The horrible realization of what is happening fills you with panic—but you are now powerless to move. The lid comes down and covers you. You hear the heavy, " +
                        "grinding sound as the stone lid of the sarcophagus, weighing many tons, slides into place. There is no way out now. You will lie there as long as the stars rise and " +
                        "set over the desert. You have become part of the secret of the Pyramids. THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;
            
                case GameState.PYRAMID:
                    if((sInput.toLowerCase().match("pyramid"))){
                        sReply = "You are not sure what is going to happen to you in the pyramid, but if Bruce and Andrea want to go in, you don't see how you can refuse. All three of you " +
                        "enter. The door closes behind you. ‘This is a data module,’ a voice begins. ‘I will respond telepathically to your brain waves and will answer all of your questions.’ " +
                        "‘What is the real secret of the Pyramids?’ you ask. ‘This module is the secret,’ the voice answers. ‘It was left here by the galactic traveler Imhotep in star year four " +
                        "billion ninety-four. This module was connected by hyperspace relay to the main galactic computer located in the Sirius star system. Other pyramids were built to imitate " +
                        "this shape so that the secret could be protected until the right time.’ The door to the module reopens, and the three of you step out into the sunlight. ‘This is the " +
                        "greatest discovery of my life,’ Bruce says after a few moments of silence. ‘This is even more exciting than what I had hoped to find when I came to Egypt. It would be " +
                        "catastrophic if this secret fell into the wrong hands. But if we use its information properly, we might be able to solve all of the problems of the world.’ THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "‘You have thirty seconds left,’ says the voice from inside the pyramid. ‘After that, you may no longer enter.’ ‘I'm not just going to walk into that thing,’ you " +
                        "say. ‘Not unless I know more about it.’ ‘If that's your honest choice,’ says Bruce, ‘Andrea and I will respect it. And in that case, I guess we'll all stay out.’ ‘This " +
                        "module will now suspend operations for one galactic minute—which is four hundred and seventy-five Earth years,’ says the voice. The door closes. You can find no trace of " +
                        "it on the surface of the pyramid. ‘I wonder what would have happened if we had gone inside?’ you ask. ‘Well, we can come back in four hundred and seventy-five years and " +
                        "find out,’ says Bruce. ‘Or we can come back now with special equipment,’ says Andrea, ‘and try to pry its secrets loose.’ You are already looking forward to that. THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;

                case GameState.PHONE:
                    if((sInput.toLowerCase().match("phone"))){
                        sReply = "Mohammed disappears in the direction of the phone. You sit, waiting—and wishing he would come back. One by one, the people at nearby tables finish their " +
                        "drinks and leave. You suddenly realize that you are alone in the cafe. Then you become aware that there are shadowy figures, each with a submachine gun, standing " +
                        "behind the large pillars around the cafe. The guns open up at you all at once. THE END";
                        this.stateCur = GameState.WELCOME;
                    } else {
                        sReply = "‘Let's get to the car.’‘There's an exit to our right that doesn't seem to be covered,’ says Mohammed. ‘I will count to five. Then we will get up from " +
                        "the table and move as quickly as we can out that door. Don't run unless they start shooting, then keep low. Ready? One, two, three, four, five.’ Your feet feel " +
                        "like lead, and even though you know you are moving as fast as you can, it feels like slow motion. Somehow you make it through the exit and into the car. You look " +
                        "back to see armed figures running in your direction. The car roars away from the curb. WHAM! Something smacks the car with terrific force. ‘They must have hit us " +
                        "with a grenade,’ Mohammed says. ‘It's a good thing this limo is armor-plated.’ Mohammed has been on the two-way police radio from the moment you jumped into the car. " +
                        "Now information comes back that the police are surrounding the area. ‘They won't catch anyone,’ says Mohammed. ‘These terrorists are professionals. They will " +
                        "disappear back into the old quarter of the city in a matter of minutes.’ Two police jeeps arrive almost immediately. Policemen begin to fan out around the area. " +
                        "You and Mohammed transfer to one of the jeeps, and it speeds off to Inspector Ahmed's villa, its siren wailing. ‘I must compliment you on your escape,’ says Ahmed, " +
                        "when you arrive. ‘It was your coolheadedness that saved you.’ ‘It was really Mohammed's quick thinking that did it,’ you reply. ‘Now that you see what kind of dangers " +
                        "we face,’ says Ahmed, ‘I will understand if you change your mind about joining the raid tomorrow. You decide that it's just too dangerous. THE END";
                        this.stateCur = GameState.WELCOME;        
                    }
                break;
            
            
        }
        return([sReply]);
    }
}