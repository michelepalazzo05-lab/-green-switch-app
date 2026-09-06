const $=id=>document.getElementById(id);

const missions=[
  ["plastic", "💧", "PLASTIC SWITCH", "Refill, don’t rebuy.", "Choose a reusable bottle instead of a single-use one.", 10, "Bring a refillable bottle from home and top it up at the water fountains during the day."],
  ["paper", "📄", "PAPER SWITCH", "Print only when you need to.", "Go digital when printing isn’t really necessary.", 8, "Before printing, ask yourself: do I really need this on paper, or can I read it on screen or send it by email?"],
  ["waste", "♻️", "WASTE SWITCH", "Sort it properly.", "Complete a correct waste-sorting action.", 10, "Check the colour of the bins at your school and sort paper, plastic, glass and food waste before you throw anything away."],
  ["food", "🍎", "FOOD SWITCH", "Save what can still be eaten.", "Avoid an avoidable food waste.", 10, "Only bring as much snack as you’ll actually eat, or freeze or reuse your lunch leftovers."],
  ["water", "🚰", "WATER SWITCH", "Every drop counts.", "Avoid an unnecessary use of water.", 8, "Turn off the tap while you brush your teeth or wash your hands, instead of leaving it running."],
  ["mobility", "🚲", "MOBILITY SWITCH", "Move smarter.", "Choose a low-impact way to get around.", 12, "Try walking, cycling or taking public transport to school at least one day this week."],
  ["spaces", "🏫", "SHARED SPACES", "Leave them better than you found them.", "Improve a shared space at school.", 10, "Organise a small clean-up of the courtyard with your class, or tidy up a classroom or the library."],
  ["plastic-001", "💧", "PLASTIC SWITCH", "Skip a plastic straw", "Avoid a disposable plastic straw when you do not need one.", 10, "Ask for your drink without a straw or choose a reusable alternative."],
  ["plastic-002", "💧", "PLASTIC SWITCH", "Choose loose fruit", "Buy or bring fruit without extra plastic packaging.", 10, "Pick loose apples, bananas or other fruit instead of individually wrapped portions."],
  ["plastic-003", "💧", "PLASTIC SWITCH", "Reuse a food container", "Use the same lunch or snack container again today.", 10, "Pack your snack in a washable box you already own."],
  ["plastic-004", "💧", "PLASTIC SWITCH", "Refuse a plastic bag", "Carry your purchase without a disposable plastic bag.", 10, "Keep a foldable tote in your backpack so you have it when you need it."],
  ["plastic-005", "💧", "PLASTIC SWITCH", "Reuse a takeaway cup", "Use a reusable cup for a drink you buy or prepare.", 11, "Keep a clean reusable cup in your bag before going out."],
  ["plastic-006", "💧", "PLASTIC SWITCH", "Avoid mini plastic packs", "Choose a larger reusable pack instead of individually wrapped portions.", 10, "Put snacks into a reusable container at home."],
  ["plastic-007", "💧", "PLASTIC SWITCH", "Refill soap", "Choose a refill option instead of a new plastic bottle.", 9, "If your home or school offers refills, top up the existing dispenser."],
  ["plastic-008", "💧", "PLASTIC SWITCH", "Carry reusable cutlery", "Use washable cutlery instead of disposable plastic utensils.", 10, "Keep a small set of reusable cutlery in your school bag."],
  ["plastic-009", "💧", "PLASTIC SWITCH", "Use a reusable lunchbox", "Pack lunch without disposable plastic wrapping.", 10, "Put sandwiches and snacks directly into your lunchbox or reusable wraps."],
  ["plastic-010", "💧", "PLASTIC SWITCH", "Reuse a plastic folder", "Keep using a folder you already have instead of buying another.", 11, "Repair or relabel an old folder before replacing it."],
  ["plastic-011", "💧", "PLASTIC SWITCH", "Avoid plastic wrap", "Cover food with a reusable alternative.", 10, "Use a lunchbox, plate with a lid, or washable cover instead of cling film."],
  ["plastic-012", "💧", "PLASTIC SWITCH", "Choose cardboard packaging", "Pick an option with less plastic packaging when two choices are similar.", 10, "Compare packages and choose the one with less unnecessary plastic."],
  ["plastic-013", "💧", "PLASTIC SWITCH", "Refill a cleaning bottle", "Reuse a cleaning spray bottle with a refill solution.", 10, "Only replace the bottle when it is damaged or unsafe to use."],
  ["plastic-014", "💧", "PLASTIC SWITCH", "Bring a reusable snack bag", "Carry snacks in a washable bag instead of a disposable wrapper.", 9, "Put nuts, fruit or biscuits in a reusable pouch before school."],
  ["plastic-015", "💧", "PLASTIC SWITCH", "Reuse a drink bottle", "Keep using a safe reusable bottle rather than replacing it for style.", 11, "Wash your bottle well and use it again tomorrow."],
  ["plastic-016", "💧", "PLASTIC SWITCH", "Avoid plastic decorations", "Make a decoration from reused or natural materials.", 10, "Use paper scraps, cardboard or leaves for a school display."],
  ["plastic-017", "💧", "PLASTIC SWITCH", "Choose reusable partyware", "Use washable cups and plates at a small gathering.", 10, "Ask classmates to bring reusable items instead of disposables."],
  ["plastic-018", "💧", "PLASTIC SWITCH", "Reuse a plastic container", "Give an old container another useful job.", 10, "Use a clean container for craft supplies, snacks or small objects."],
  ["plastic-019", "💧", "PLASTIC SWITCH", "Skip a plastic sachet", "Choose a product without a tiny single-use sachet when possible.", 10, "Use a refill bottle or larger shared container instead."],
  ["plastic-020", "💧", "PLASTIC SWITCH", "Carry a tote bag", "Use a reusable bag for a purchase today.", 11, "Fold a tote into your backpack so it is always ready."],
  ["plastic-021", "💧", "PLASTIC SWITCH", "Choose a fountain", "Fill up instead of buying a bottled drink.", 9, "Bring your reusable bottle and use the nearest drinking-water point."],
  ["plastic-022", "💧", "PLASTIC SWITCH", "Reuse packaging", "Give useful packaging a second life before recycling it.", 10, "Turn a sturdy box or container into storage for school supplies."],
  ["plastic-023", "💧", "PLASTIC SWITCH", "Avoid disposable gloves", "Do not use disposable gloves when they are unnecessary.", 10, "For ordinary clean tasks, wash your hands instead when appropriate."],
  ["plastic-024", "💧", "PLASTIC SWITCH", "Use a refill station", "Choose a refill station for a product you need.", 10, "Check whether your school or local shop offers a refill option."],
  ["plastic-025", "💧", "PLASTIC SWITCH", "Pack a plastic-free snack", "Bring a snack with little or no single-use plastic.", 11, "Choose fresh fruit or a homemade snack in a reusable container."],
  ["plastic-026", "💧", "PLASTIC SWITCH", "Repair a plastic item", "Fix a reusable plastic object instead of replacing it.", 10, "Use a safe repair method or ask an adult for help with damaged parts."],
  ["plastic-027", "💧", "PLASTIC SWITCH", "Choose reusable packaging", "Select a reusable option for takeaway food or drinks.", 10, "Ask whether the café or event accepts reusable containers."],
  ["plastic-028", "💧", "PLASTIC SWITCH", "Share a bulk item", "Use one shared larger item instead of many individually wrapped ones.", 9, "For a class activity, choose shared supplies where practical."],
  ["plastic-029", "💧", "PLASTIC SWITCH", "Wash and reuse a container", "Clean a container so it can be used again.", 10, "Rinse it promptly and let it dry fully before the next use."],
  ["plastic-030", "💧", "PLASTIC SWITCH", "Avoid novelty plastic", "Skip a plastic item you do not really need.", 11, "Pause before buying and ask whether you will still use it next month."],
  ["plastic-031", "💧", "PLASTIC SWITCH", "Use reusable ice packs", "Reuse an existing ice pack instead of buying a new disposable one.", 10, "Keep it clean and store it safely in the freezer."],
  ["plastic-032", "💧", "PLASTIC SWITCH", "Bring a reusable coffee cup", "Choose your reusable cup for a hot drink.", 10, "Put it by the door so you remember it before leaving."],
  ["plastic-033", "💧", "PLASTIC SWITCH", "Reuse a water bottle at an event", "Refill rather than taking a new disposable bottle.", 10, "Mark your reusable bottle so you can identify it easily."],
  ["plastic-034", "💧", "PLASTIC SWITCH", "Avoid plastic cutlery at school", "Choose normal washable cutlery when available.", 10, "Eat in the cafeteria with reusable utensils rather than disposable ones."],
  ["plastic-035", "💧", "PLASTIC SWITCH", "Make a plastic-free choice", "Replace one unnecessary plastic item with a reusable alternative.", 10, "Look around your routine and pick the easiest switch to make today."],
  ["plastic-036", "💧", "PLASTIC SWITCH", "Choose a reusable produce bag", "Avoid a disposable bag for loose produce.", 10, "Keep a washable produce bag with your shopping tote."],
  ["paper-001", "📄", "PAPER SWITCH", "Print double-sided", "Use both sides of a sheet for a document.", 8, "Select double-sided printing in the printer settings when available."],
  ["paper-002", "📄", "PAPER SWITCH", "Use scrap paper", "Write on the blank side of an old sheet.", 8, "Keep a small stack of one-sided paper beside your desk for notes."],
  ["paper-003", "📄", "PAPER SWITCH", "Share a digital worksheet", "Send a worksheet digitally instead of making extra copies.", 8, "Use your class platform or email when everyone can access it."],
  ["paper-004", "📄", "PAPER SWITCH", "Reuse an envelope", "Use a clean envelope again when practical.", 8, "Cross out old addresses and add a fresh label."],
  ["paper-005", "📄", "PAPER SWITCH", "Choose digital tickets", "Use an electronic ticket or confirmation.", 9, "Save the ticket on your phone if the organiser accepts digital entry."],
  ["paper-006", "📄", "PAPER SWITCH", "Avoid printing an email", "Keep a message on screen unless paper is genuinely useful.", 8, "Star or save important emails so you can find them later."],
  ["paper-007", "📄", "PAPER SWITCH", "Reuse a notebook page", "Use remaining blank pages before starting a new notebook.", 8, "Check the back pages of an old notebook for usable space."],
  ["paper-008", "📄", "PAPER SWITCH", "Take digital notes", "Write class notes on a device when appropriate.", 8, "Use a notes app and organise the subject with headings."],
  ["paper-009", "📄", "PAPER SWITCH", "Use a shared poster file", "Create one digital version instead of many drafts on paper.", 8, "Let group members edit or comment on the same file."],
  ["paper-010", "📄", "PAPER SWITCH", "Reuse cardboard", "Keep clean cardboard for a school project.", 9, "Flatten boxes and store useful pieces for models or signs."],
  ["paper-011", "📄", "PAPER SWITCH", "Print only final copies", "Avoid printing drafts that will be changed again.", 8, "Proofread on screen first, then print only the final version."],
  ["paper-012", "📄", "PAPER SWITCH", "Make a paper-free reminder", "Set a digital reminder instead of a paper note.", 8, "Use your phone calendar or task app for today’s reminder."],
  ["paper-013", "📄", "PAPER SWITCH", "Share one printed resource", "Use a shared copy when individual copies are unnecessary.", 8, "Place the resource where the whole group can consult it."],
  ["paper-014", "📄", "PAPER SWITCH", "Reuse gift paper", "Save intact wrapping paper for another occasion.", 8, "Fold it neatly and store it flat for later use."],
  ["paper-015", "📄", "PAPER SWITCH", "Use a digital calendar", "Plan the day without printing a calendar.", 9, "Put deadlines and appointments into your calendar app."],
  ["paper-016", "📄", "PAPER SWITCH", "Read a digital menu", "Choose a QR or digital menu when offered.", 8, "Use your phone rather than taking a disposable paper menu."],
  ["paper-017", "📄", "PAPER SWITCH", "Avoid a duplicate handout", "Check whether you already have the information digitally.", 8, "Search your files before asking for another printed copy."],
  ["paper-018", "📄", "PAPER SWITCH", "Reuse a folder label", "Update an existing label instead of replacing the whole folder.", 8, "Cover the old text with a small piece of scrap paper."],
  ["paper-019", "📄", "PAPER SWITCH", "Use both sides of notes", "Turn one-sided notes into a fresh writing surface.", 8, "Keep them together in a scrap-paper tray."],
  ["paper-020", "📄", "PAPER SWITCH", "Repair a notebook", "Keep a notebook usable instead of replacing it for a small tear.", 9, "Tape a torn cover or page carefully and continue using it."],
  ["paper-021", "📄", "PAPER SWITCH", "Borrow a book", "Borrow a book instead of buying a copy you will read once.", 8, "Check the school or public library first."],
  ["paper-022", "📄", "PAPER SWITCH", "Return a library book on time", "Help the same paper resource serve another reader.", 8, "Put the due date in your calendar so you do not forget."],
  ["paper-023", "📄", "PAPER SWITCH", "Share a textbook", "Use one shared resource when your teacher allows it.", 8, "Coordinate with a classmate so both people can access it."],
  ["paper-024", "📄", "PAPER SWITCH", "Use a whiteboard", "Write a temporary message on a board instead of a sheet.", 8, "Erase it when the information is no longer needed."],
  ["paper-025", "📄", "PAPER SWITCH", "Make a digital shopping list", "Keep your list on your phone.", 9, "Use a notes app and update it as you shop."],
  ["paper-026", "📄", "PAPER SWITCH", "Reuse a paper bag", "Use a sturdy paper bag more than once.", 8, "Fold it and keep it somewhere dry between uses."],
  ["paper-027", "📄", "PAPER SWITCH", "Avoid disposable paper plates", "Choose washable plates when available.", 8, "Use the normal dishes at home or school instead."],
  ["paper-028", "📄", "PAPER SWITCH", "Use digital feedback", "Send comments electronically when possible.", 8, "Comment on the shared document rather than printing it."],
  ["paper-029", "📄", "PAPER SWITCH", "Reuse old maps", "Use an outdated but still useful map for a craft.", 8, "Cut or fold it into a project instead of buying new paper."],
  ["paper-030", "📄", "PAPER SWITCH", "Create a paper-free invitation", "Invite people digitally for a small event.", 9, "Use a group message or email instead of printed cards."],
  ["paper-031", "📄", "PAPER SWITCH", "Scan instead of photocopying", "Keep a digital copy of a useful page.", 8, "Use a scanner or a phone scanning feature when permitted."],
  ["paper-032", "📄", "PAPER SWITCH", "Use a reusable planner", "Keep one planner for longer instead of replacing it early.", 8, "Continue using blank sections and add pages only if needed."],
  ["paper-033", "📄", "PAPER SWITCH", "Avoid a disposable receipt", "Choose a digital receipt when the shop offers one.", 8, "Ask for an email or app receipt instead of paper."],
  ["paper-034", "📄", "PAPER SWITCH", "Make a paper-light school sign", "Use one clear sign instead of many small notices.", 8, "Place one readable poster where people will see it."],
  ["paper-035", "📄", "PAPER SWITCH", "Reuse a paper bookmark", "Keep using a bookmark instead of making a new one.", 9, "Use an old card, receipt-sized scrap or existing bookmark."],
  ["waste-001", "♻️", "WASTE SWITCH", "Separate food scraps", "Keep food waste out of the general bin when a food-waste bin exists.", 10, "Scrape leftovers into the correct container before disposing of packaging."],
  ["waste-002", "♻️", "WASTE SWITCH", "Empty a recyclable container", "Prepare a recyclable container correctly before sorting it.", 10, "Follow your local rules and empty or rinse it if required."],
  ["waste-003", "♻️", "WASTE SWITCH", "Flatten a cardboard box", "Make cardboard easier to collect and transport.", 10, "Fold or flatten clean boxes before putting them in the paper/cardboard bin."],
  ["waste-004", "♻️", "WASTE SWITCH", "Keep batteries separate", "Use the correct collection point for used batteries.", 10, "Never put batteries in ordinary household or school bins."],
  ["waste-005", "♻️", "WASTE SWITCH", "Collect litter safely", "Remove a few pieces of litter from a shared area.", 11, "Use gloves or a litter picker when appropriate and avoid sharp or hazardous items."],
  ["waste-006", "♻️", "WASTE SWITCH", "Reuse before recycling", "Find a second use for an item that is still useful.", 10, "Ask whether you can reuse it before sending it to the recycling bin."],
  ["waste-007", "♻️", "WASTE SWITCH", "Check the bin label", "Learn one recycling rule you did not know.", 9, "Read the label on a school bin and remember the most important instruction."],
  ["waste-008", "♻️", "WASTE SWITCH", "Reduce a disposable item", "Prevent one piece of waste before it exists.", 10, "Choose a reusable item for one routine activity today."],
  ["waste-009", "♻️", "WASTE SWITCH", "Pack a zero-waste snack", "Bring food with reusable containers and minimal waste.", 10, "Use a lunchbox and refillable bottle instead of disposable packaging."],
  ["waste-010", "♻️", "WASTE SWITCH", "Start a scrap-paper box", "Collect clean one-sided paper for reuse.", 11, "Put a small labelled box near your printer or desk."],
  ["waste-011", "♻️", "WASTE SWITCH", "Reuse a school supply", "Use an old supply before buying another.", 10, "Check your drawers for pens, folders or notebooks that still work."],
  ["waste-012", "♻️", "WASTE SWITCH", "Donate a usable item", "Pass on something you no longer need.", 10, "Ask a school, charity or community group whether they accept it."],
  ["waste-013", "♻️", "WASTE SWITCH", "Repair instead of binning", "Fix a small broken item when safe to do so.", 10, "Try a simple repair or ask someone with the right skills for help."],
  ["waste-014", "♻️", "WASTE SWITCH", "Use a refillable pen", "Avoid throwing away a whole pen when only the ink is finished.", 9, "Choose a refillable model and replace only the refill."],
  ["waste-015", "♻️", "WASTE SWITCH", "Compost when available", "Put suitable food scraps into a compost system.", 11, "Follow the compost bin’s accepted-material list."],
  ["waste-016", "♻️", "WASTE SWITCH", "Clear your desk for sorting", "Separate recyclable and reusable items from rubbish.", 10, "Make three small piles: reuse, recycle and waste."],
  ["waste-017", "♻️", "WASTE SWITCH", "Reuse craft materials", "Use leftovers from another project.", 10, "Keep clean scraps of paper, cardboard and fabric in a craft box."],
  ["waste-018", "♻️", "WASTE SWITCH", "Avoid contamination", "Keep non-recyclables out of a recycling bin.", 10, "When unsure, check your local recycling instructions rather than guessing."],
  ["waste-019", "♻️", "WASTE SWITCH", "Carry your waste until a bin", "Do not leave litter because a bin is not nearby.", 10, "Keep the item in your bag or pocket until you find the correct bin."],
  ["waste-020", "♻️", "WASTE SWITCH", "Sort a classroom bin", "Help your class make one waste bin easier to use.", 11, "Check labels and move wrongly placed items only when it is safe."],
  ["waste-021", "♻️", "WASTE SWITCH", "Reuse shipping packaging", "Keep a box or padded envelope for another shipment.", 9, "Flatten it and store it somewhere dry."],
  ["waste-022", "♻️", "WASTE SWITCH", "Recycle an old battery correctly", "Take a used battery to an approved collection point.", 10, "Keep batteries away from heat and metal objects until you can recycle them."],
  ["waste-023", "♻️", "WASTE SWITCH", "Use a reusable tissue alternative", "Choose a washable cloth where appropriate.", 10, "Carry a clean washable handkerchief for situations where it makes sense."],
  ["waste-024", "♻️", "WASTE SWITCH", "Avoid overpacking supplies", "Take only what you need for an activity.", 10, "Plan quantities before starting so fewer leftovers become waste."],
  ["waste-025", "♻️", "WASTE SWITCH", "Share equipment", "Use shared equipment rather than buying duplicate items.", 11, "Borrow a tool or school supply that someone else already has."],
  ["waste-026", "♻️", "WASTE SWITCH", "Refill a marker", "Use a refillable marker if compatible.", 10, "Store markers with their caps on so they last longer."],
  ["waste-027", "♻️", "WASTE SWITCH", "Organise a mini clean-up", "Improve one small shared area.", 10, "Spend ten minutes collecting visible litter with safe equipment."],
  ["waste-028", "♻️", "WASTE SWITCH", "Learn your local recycling rule", "Find out one item that your area handles differently.", 9, "Check your municipality or school recycling guide."],
  ["waste-029", "♻️", "WASTE SWITCH", "Reuse a jar", "Give a clean glass jar a second job.", 10, "Use it for storage, craft materials or another safe purpose."],
  ["waste-030", "♻️", "WASTE SWITCH", "Sort paper correctly", "Keep paper separate from food-contaminated waste.", 11, "Remove obvious non-paper items and follow local rules."],
  ["waste-031", "♻️", "WASTE SWITCH", "Prevent food waste", "Take or serve a portion you can finish.", 10, "Start with a smaller portion and take more only if you are still hungry."],
  ["waste-032", "♻️", "WASTE SWITCH", "Choose durable supplies", "Pick a longer-lasting item when you need to replace one.", 10, "Compare durability and repairability, not just appearance."],
  ["waste-033", "♻️", "WASTE SWITCH", "Teach one sorting rule", "Share a useful waste-sorting tip with a classmate.", 10, "Point to the correct bin and explain why that item belongs there."],
  ["waste-034", "♻️", "WASTE SWITCH", "Keep reusable items out of the bin", "Rescue one useful item that was about to be discarded.", 10, "Ask the owner before taking it and make sure it is clean and safe."],
  ["food-001", "🍎", "FOOD SWITCH", "Take a smaller first portion", "Reduce the chance of leaving food on your plate.", 10, "Start with less and take more if you are still hungry."],
  ["food-002", "🍎", "FOOD SWITCH", "Save safe leftovers", "Keep suitable leftovers for another meal.", 10, "Cool and store food promptly according to safe food-handling guidance."],
  ["food-003", "🍎", "FOOD SWITCH", "Choose seasonal fruit", "Pick fruit that is in season locally when possible.", 10, "Check what fruit is naturally available in your region this month."],
  ["food-004", "🍎", "FOOD SWITCH", "Eat a plant-rich meal", "Choose a meal centred on vegetables, beans or grains.", 10, "Try a vegetarian option you already enjoy or are curious about."],
  ["food-005", "🍎", "FOOD SWITCH", "Plan your lunch", "Decide what you will eat before packing food.", 11, "Check what you already have at home so you do not buy duplicates."],
  ["food-006", "🍎", "FOOD SWITCH", "Use what you already have", "Build a snack from food already at home.", 10, "Look in the fridge or cupboard for items that need using soon."],
  ["food-007", "🍎", "FOOD SWITCH", "Share surplus food safely", "Offer unopened or safely shareable food rather than wasting it.", 9, "Follow school rules and never share food when allergies or safety make it unsuitable."],
  ["food-008", "🍎", "FOOD SWITCH", "Avoid an unnecessary takeaway", "Choose food you already have when practical.", 10, "If you have a meal ready at home, eat it before ordering another."],
  ["food-009", "🍎", "FOOD SWITCH", "Choose a meat-free meal", "Make one meal vegetarian today.", 10, "Try beans, lentils, vegetables or grains as the main part of the meal."],
  ["food-010", "🍎", "FOOD SWITCH", "Store fruit properly", "Help fruit last longer by storing it appropriately.", 11, "Keep each fruit in the place that best preserves its quality."],
  ["food-011", "🍎", "FOOD SWITCH", "Use a reusable lunchbox", "Bring food without disposable packaging.", 10, "Pack your lunch directly into a washable container."],
  ["food-012", "🍎", "FOOD SWITCH", "Make a leftovers meal", "Turn suitable leftovers into a new meal.", 10, "Combine leftovers with fresh ingredients instead of discarding them."],
  ["food-013", "🍎", "FOOD SWITCH", "Measure rice or pasta", "Cook an amount that matches the people eating.", 10, "Use a measuring cup or kitchen scale when you are unsure of portions."],
  ["food-014", "🍎", "FOOD SWITCH", "Check the fridge first", "Use food that needs eating soon.", 9, "Look for items close to their use-by or best-before dates and follow label guidance."],
  ["food-015", "🍎", "FOOD SWITCH", "Make a no-waste smoothie", "Use ripe fruit that is still safe to eat.", 11, "Blend ripe fruit with other suitable ingredients instead of letting it go unused."],
  ["food-016", "🍎", "FOOD SWITCH", "Freeze food before it spoils", "Freeze suitable food when you know you will not eat it soon.", 10, "Label portions and freeze them before quality deteriorates."],
  ["food-017", "🍎", "FOOD SWITCH", "Choose unpackaged produce", "Buy loose fruit or vegetables when practical.", 10, "Bring a reusable produce bag or carry items without extra packaging."],
  ["food-018", "🍎", "FOOD SWITCH", "Pack only what you will eat", "Match your packed food to your appetite.", 10, "Think about the day ahead and adjust portions accordingly."],
  ["food-019", "🍎", "FOOD SWITCH", "Try a legume-based dish", "Eat beans, chickpeas or lentils as part of a meal.", 10, "Add them to a salad, soup, pasta or another familiar dish."],
  ["food-020", "🍎", "FOOD SWITCH", "Use edible stems or leaves", "Use safe edible parts that are often discarded.", 11, "Look up a simple recipe for broccoli stems, herb stalks or similar ingredients."],
  ["food-021", "🍎", "FOOD SWITCH", "Turn bread into another dish", "Use slightly stale bread rather than wasting it.", 9, "Toast it, make breadcrumbs or use it in another suitable recipe."],
  ["food-022", "🍎", "FOOD SWITCH", "Choose tap water", "Drink tap or filtered water when it is safe and available.", 10, "Fill your reusable bottle instead of buying a packaged drink."],
  ["food-023", "🍎", "FOOD SWITCH", "Avoid an oversized portion", "Choose a serving size you can realistically finish.", 10, "You can always take more later if food remains available."],
  ["food-024", "🍎", "FOOD SWITCH", "Save an unfinished snack", "Keep suitable food for later rather than throwing it away.", 10, "Store it safely and label it if needed."],
  ["food-025", "🍎", "FOOD SWITCH", "Use a food-sharing shelf responsibly", "Pass on suitable surplus through an approved school scheme.", 11, "Follow the scheme’s hygiene, allergy and date rules."],
  ["food-026", "🍎", "FOOD SWITCH", "Plan a leftover dinner", "Design one meal around food already available.", 10, "Search your kitchen before shopping and use ingredients that need attention."],
  ["food-027", "🍎", "FOOD SWITCH", "Choose local produce when practical", "Support a nearby food option when it fits your needs.", 10, "Look for locally grown seasonal products at a market or shop."],
  ["food-028", "🍎", "FOOD SWITCH", "Avoid food as a reward you will not eat", "Choose an amount you actually want.", 9, "Do not take extra food just because it is offered if you know it will go to waste."],
  ["food-029", "🍎", "FOOD SWITCH", "Compost unavoidable scraps", "Send suitable food scraps to compost if available.", 10, "Check the compost system’s accepted foods before adding anything."],
  ["food-030", "🍎", "FOOD SWITCH", "Pack a fruit snack", "Bring whole fruit instead of a packaged snack.", 11, "Wash it as appropriate and place it in a reusable container or bag."],
  ["food-031", "🍎", "FOOD SWITCH", "Use a smaller plate", "Help yourself take a realistic first portion.", 10, "A smaller plate can make it easier to avoid serving more than you need."],
  ["food-032", "🍎", "FOOD SWITCH", "Learn a food-waste fact", "Teach someone one way to prevent food waste.", 10, "Share a practical tip you can both try this week."],
  ["food-033", "🍎", "FOOD SWITCH", "Check date labels carefully", "Use food safely rather than discarding it automatically.", 10, "Understand the difference between safety-focused dates and quality-focused dates in your country."],
  ["food-034", "🍎", "FOOD SWITCH", "Use a reusable food wrap", "Replace disposable food film with a washable option.", 10, "Wrap a sandwich or snack in a reusable cover you already own."],
  ["water-001", "🚰", "WATER SWITCH", "Take a shorter shower", "Reduce the time the shower runs.", 8, "Set a simple timer and aim for a shorter shower than usual."],
  ["water-002", "🚰", "WATER SWITCH", "Turn off the tap while soaping", "Stop the flow when you do not need it.", 8, "Wet your hands, turn off the tap, soap, then rinse."],
  ["water-003", "🚰", "WATER SWITCH", "Report a leaking tap", "Help prevent water being wasted at school.", 8, "Tell a teacher or building manager about a dripping or running tap."],
  ["water-004", "🚰", "WATER SWITCH", "Use only the water you need", "Avoid filling a glass or bottle more than necessary.", 8, "Pour a little first and refill if you still need more."],
  ["water-005", "🚰", "WATER SWITCH", "Reuse clean rinse water", "Give suitable leftover clean water another safe use.", 9, "Use it for plants or another appropriate task when possible."],
  ["water-006", "🚰", "WATER SWITCH", "Water plants wisely", "Avoid watering when evaporation is high.", 8, "Water in the cooler part of the day and only as much as plants need."],
  ["water-007", "🚰", "WATER SWITCH", "Use a full dishwasher load", "Avoid running a partly empty machine when practical.", 8, "Wait until the dishwasher is reasonably full before starting it."],
  ["water-008", "🚰", "WATER SWITCH", "Run a full washing load", "Reduce unnecessary washing cycles.", 8, "Wait until you have enough clothes for an efficient load, within machine guidance."],
  ["water-009", "🚰", "WATER SWITCH", "Close the tap firmly", "Prevent a tap from dripping after use.", 8, "Turn it off gently but completely and report any leak you notice."],
  ["water-010", "🚰", "WATER SWITCH", "Keep a reusable bottle", "Avoid buying packaged drinks while staying hydrated.", 9, "Fill your bottle before leaving home and refill it as needed."],
  ["water-011", "🚰", "WATER SWITCH", "Use a basin for washing", "Contain water instead of letting it run continuously.", 8, "For a suitable cleaning task, use a basin or bowl with only the needed amount."],
  ["water-012", "🚰", "WATER SWITCH", "Defrost food safely in the fridge", "Avoid wasting water during food preparation.", 8, "Plan ahead and thaw food in the refrigerator according to safe handling guidance."],
  ["water-013", "🚰", "WATER SWITCH", "Use leftover cooking water safely", "Reuse suitable cooled water for plants when appropriate.", 8, "Only reuse water when it contains no harmful additives and is suitable for the plants."],
  ["water-014", "🚰", "WATER SWITCH", "Check the toilet flush", "Help identify a running toilet.", 8, "Listen for continuous water flow and report a leak to an adult or building manager."],
  ["water-015", "🚰", "WATER SWITCH", "Choose a water-efficient setting", "Use an efficient appliance setting when available.", 9, "Select an eco or low-water cycle when it suits the load."],
  ["water-016", "🚰", "WATER SWITCH", "Do not hose a small area", "Use a bucket or targeted watering for small tasks.", 8, "Measure the amount of water you need instead of leaving a hose running."],
  ["water-017", "🚰", "WATER SWITCH", "Fill a pet bowl thoughtfully", "Provide enough fresh water without constant overfilling.", 8, "Fill the bowl to a suitable level and refresh it regularly."],
  ["water-018", "🚰", "WATER SWITCH", "Carry water from home", "Reduce unnecessary bottled-water purchases.", 8, "Fill your reusable bottle before school or travel."],
  ["water-019", "🚰", "WATER SWITCH", "Use a refill fountain", "Choose refill water when safe and available.", 8, "Top up your bottle rather than taking a new packaged drink."],
  ["water-020", "🚰", "WATER SWITCH", "Wash fruit in a bowl", "Avoid unnecessary running water.", 9, "Use a bowl of water for washing produce, then use the water appropriately."],
  ["water-021", "🚰", "WATER SWITCH", "Rinse efficiently", "Keep rinsing time short.", 8, "Use a brief rinse and turn the tap off between tasks."],
  ["water-022", "🚰", "WATER SWITCH", "Learn your school water rules", "Find one way your school saves water.", 8, "Ask staff or read signs near sinks, fountains and toilets."],
  ["water-023", "🚰", "WATER SWITCH", "Check for hidden leaks", "Look for signs of unnecessary water flow.", 8, "Report damp areas, dripping fixtures or unusual water sounds to staff."],
  ["water-024", "🚰", "WATER SWITCH", "Use rainwater where allowed", "Use collected rainwater for a suitable non-drinking purpose.", 8, "Only use approved collection systems and follow local guidance."],
  ["water-025", "🚰", "WATER SWITCH", "Choose a shower over a bath", "Use the lower-water option when appropriate.", 9, "Keep the shower short and avoid unnecessary running time."],
  ["water-026", "🚰", "WATER SWITCH", "Turn off outdoor taps", "Make sure outdoor water is not left running.", 8, "Check the tap after gardening or cleaning and close it fully."],
  ["water-027", "🚰", "WATER SWITCH", "Water only dry plants", "Avoid watering plants that do not need it.", 8, "Check the soil first and water only when appropriate."],
  ["water-028", "🚰", "WATER SWITCH", "Reuse a water bottle all day", "Refill one bottle instead of opening several.", 8, "Keep the same bottle with you and wash it regularly."],
  ["water-029", "🚰", "WATER SWITCH", "Avoid unnecessary ice", "Use only as much ice as you will use.", 8, "Skip extra ice if you do not need it, especially when serving drinks at home."],
  ["water-030", "🚰", "WATER SWITCH", "Use a damp cloth for a small clean", "Avoid running water for a simple wipe.", 9, "Moisten a cloth with a small amount of water and clean the area."],
  ["water-031", "🚰", "WATER SWITCH", "Choose water-saving habits together", "Encourage one classmate to save water too.", 8, "Share one easy tap or shower habit and try it together."],
  ["water-032", "🚰", "WATER SWITCH", "Close the tap during shaving", "Avoid continuous water flow during the task.", 8, "Use a small amount of water for rinsing rather than leaving the tap open."],
  ["water-033", "🚰", "WATER SWITCH", "Check your shower timer", "Measure how long your shower takes.", 8, "Time one shower today and see whether you can reduce it safely next time."],
  ["water-034", "🚰", "WATER SWITCH", "Use a reusable bottle with a measurement mark", "Notice how much water you actually drink.", 8, "Choose a bottle with volume markings and refill it as needed."],
  ["water-035", "🚰", "WATER SWITCH", "Use a full sink for dishes", "Avoid keeping the tap running during hand washing of dishes.", 9, "Fill a basin with only the water needed, then rinse efficiently."],
  ["mobility-001", "🚲", "MOBILITY SWITCH", "Cycle to school", "Use a bicycle for a suitable trip.", 12, "Check your route and safety equipment before leaving."],
  ["mobility-002", "🚲", "MOBILITY SWITCH", "Take public transport", "Choose bus, tram or train for a trip where available.", 12, "Check the timetable and plan enough time for the journey."],
  ["mobility-003", "🚲", "MOBILITY SWITCH", "Carpool once", "Share a car trip with people going the same way.", 12, "Coordinate pickup and drop-off points so one trip serves several people."],
  ["mobility-004", "🚲", "MOBILITY SWITCH", "Walk part of your commute", "Combine transport with walking.", 12, "Get off one stop earlier or park farther away when it is safe."],
  ["mobility-005", "🚲", "MOBILITY SWITCH", "Use a bike-share", "Choose shared cycling for a suitable trip.", 12, "Check the bike and local safety rules before setting off."],
  ["mobility-006", "🚲", "MOBILITY SWITCH", "Skip an unnecessary car trip", "Combine errands or choose another mode.", 12, "Ask whether the trip can be walked, cycled, shared or postponed."],
  ["mobility-007", "🚲", "MOBILITY SWITCH", "Plan a low-carbon route", "Choose a route that works well without a car.", 11, "Compare walking, cycling and public transport before travelling."],
  ["mobility-008", "🚲", "MOBILITY SWITCH", "Share a ride to an event", "Travel together instead of in separate cars.", 12, "Ask classmates who are going the same way whether you can share."],
  ["mobility-009", "🚲", "MOBILITY SWITCH", "Walk to a nearby shop", "Use your feet for a short shopping trip.", 12, "Take a reusable bag and choose a safe pedestrian route."],
  ["mobility-010", "🚲", "MOBILITY SWITCH", "Cycle for an errand", "Use your bike for a practical local trip.", 12, "Secure your bike properly and wear appropriate safety equipment."],
  ["mobility-011", "🚲", "MOBILITY SWITCH", "Use the stairs", "Replace a short elevator trip with stairs.", 12, "Choose stairs when the building and your health make it appropriate."],
  ["mobility-012", "🚲", "MOBILITY SWITCH", "Have a car-free afternoon", "Make several trips without a private car.", 12, "Plan your afternoon around walking, cycling or public transport."],
  ["mobility-013", "🚲", "MOBILITY SWITCH", "Learn your bus route", "Prepare to use public transport more easily.", 12, "Find your nearest stop and check the next useful departures."],
  ["mobility-014", "🚲", "MOBILITY SWITCH", "Map a walking route", "Discover a safe pedestrian route.", 11, "Use a map to find a quieter or more direct walking path."],
  ["mobility-015", "🚲", "MOBILITY SWITCH", "Invite a friend to walk", "Turn a trip into shared active travel.", 12, "Message a friend and arrange to walk together."],
  ["mobility-016", "🚲", "MOBILITY SWITCH", "Use public transport for school travel", "Choose shared transport instead of a private ride.", 12, "Check tickets, stops and departure times the night before."],
  ["mobility-017", "🚲", "MOBILITY SWITCH", "Combine two errands", "Avoid making separate journeys.", 12, "Plan the order of errands so one trip covers both."],
  ["mobility-018", "🚲", "MOBILITY SWITCH", "Choose a local destination", "Meet or shop closer to home.", 12, "Look for a nearby option before travelling farther away."],
  ["mobility-019", "🚲", "MOBILITY SWITCH", "Park once", "Walk between several nearby destinations.", 12, "Leave the car in one place and complete short trips on foot."],
  ["mobility-020", "🚲", "MOBILITY SWITCH", "Try a cycle route", "Explore a safe route by bike.", 12, "Ask a local cyclist or use a route map to choose a suitable path."],
  ["mobility-021", "🚲", "MOBILITY SWITCH", "Learn a cycling safety rule", "Improve your confidence for future trips.", 11, "Read one local cycling rule and apply it on your next ride."],
  ["mobility-022", "🚲", "MOBILITY SWITCH", "Check tyre pressure", "Make your bike easier and safer to ride.", 12, "Use the manufacturer’s recommended pressure and a proper pump."],
  ["mobility-023", "🚲", "MOBILITY SWITCH", "Walk during a break", "Add a short active trip instead of staying seated.", 12, "Take a safe five-to-ten-minute walk during a free period."],
  ["mobility-024", "🚲", "MOBILITY SWITCH", "Take the train for a local trip", "Use rail instead of a private car when practical.", 12, "Check the timetable and allow time to reach the station."],
  ["mobility-025", "🚲", "MOBILITY SWITCH", "Use a park-and-ride option", "Combine driving with shared transport.", 12, "Park at an approved site and continue by public transport."],
  ["mobility-026", "🚲", "MOBILITY SWITCH", "Avoid idling", "Reduce unnecessary engine running while stationary.", 12, "Turn the engine off when waiting is safe and permitted."],
  ["mobility-027", "🚲", "MOBILITY SWITCH", "Share a school journey plan", "Help classmates find lower-impact routes.", 12, "Compare routes and share useful timetable or walking information."],
  ["mobility-028", "🚲", "MOBILITY SWITCH", "Choose a car-free lunch trip", "Walk or cycle to a nearby lunch option.", 11, "Bring what you need and choose a safe route."],
  ["mobility-029", "🚲", "MOBILITY SWITCH", "Try one new public transport line", "Learn a route you could use again.", 12, "Plan the journey in advance and check the return trip too."],
  ["mobility-030", "🚲", "MOBILITY SWITCH", "Walk home with a classmate", "Replace part of the ride with a shared walk.", 12, "Choose a safe route and agree where to meet."],
  ["mobility-031", "🚲", "MOBILITY SWITCH", "Use a reusable travel card", "Avoid unnecessary disposable tickets where a reusable option exists.", 12, "Top up the card according to the local system."],
  ["mobility-032", "🚲", "MOBILITY SWITCH", "Plan tomorrow’s commute", "Prepare a lower-impact journey in advance.", 12, "Check weather, timetable and route tonight so the choice is easy tomorrow."],
  ["mobility-033", "🚲", "MOBILITY SWITCH", "Teach a mobility tip", "Share one practical low-carbon travel idea.", 12, "Tell a friend about a route, timetable or car-sharing option you have tested."],
  ["mobility-034", "🚲", "MOBILITY SWITCH", "Choose a walking meeting", "Walk while talking when the meeting and setting allow it.", 12, "Take a safe short walk with a classmate instead of sitting for the whole chat."],
  ["spaces-001", "🏫", "SHARED SPACES", "Pick up safe litter", "Improve a shared outdoor area.", 10, "Use gloves or a litter picker when appropriate and avoid hazardous items."],
  ["spaces-002", "🏫", "SHARED SPACES", "Organise a desk area", "Make a shared work area easier to use.", 10, "Return supplies to their places and clear unnecessary clutter."],
  ["spaces-003", "🏫", "SHARED SPACES", "Clean a reusable bottle station", "Help keep a shared refill point pleasant.", 10, "Ask permission and use the school’s recommended cleaning method."],
  ["spaces-004", "🏫", "SHARED SPACES", "Water a school plant", "Care for a shared green space.", 10, "Check whether the plant needs water first and use only the needed amount."],
  ["spaces-005", "🏫", "SHARED SPACES", "Create a reuse shelf", "Make useful spare materials easy to find.", 11, "With permission, label a shelf for clean reusable classroom supplies."],
  ["spaces-006", "🏫", "SHARED SPACES", "Return shared equipment", "Put borrowed items back correctly.", 10, "Check that everything is clean and returned to its labelled place."],
  ["spaces-007", "🏫", "SHARED SPACES", "Help in the library", "Improve a shared learning space.", 9, "Ask staff what small organising or tidying task would help."],
  ["spaces-008", "🏫", "SHARED SPACES", "Clean up after a group activity", "Leave the room ready for the next group.", 10, "Sort rubbish, return equipment and wipe surfaces as instructed."],
  ["spaces-009", "🏫", "SHARED SPACES", "Make a simple sorting sign", "Help people use the right bin.", 10, "Create a clear sign showing examples that match your school’s rules."],
  ["spaces-010", "🏫", "SHARED SPACES", "Organise classroom supplies", "Reduce time wasted searching for materials.", 11, "Group similar items and label the storage area with permission."],
  ["spaces-011", "🏫", "SHARED SPACES", "Care for shared plants", "Look after greenery in a common space.", 10, "Remove dead leaves or tidy the area only if staff say it is appropriate."],
  ["spaces-012", "🏫", "SHARED SPACES", "Check a recycling point", "Make sure its instructions are easy to understand.", 10, "Report missing or confusing labels to the person responsible."],
  ["spaces-013", "🏫", "SHARED SPACES", "Set up a reuse box", "Collect clean materials for future activities.", 10, "Ask a teacher before placing a clearly labelled box in the classroom."],
  ["spaces-014", "🏫", "SHARED SPACES", "Tidy a common table", "Clear a table used by many people.", 9, "Return objects to their owners or storage instead of moving them randomly."],
  ["spaces-015", "🏫", "SHARED SPACES", "Help reset a classroom", "Prepare the room for the next lesson.", 11, "Straighten chairs, close materials and follow your teacher’s setup instructions."],
  ["spaces-016", "🏫", "SHARED SPACES", "Make a green corner", "Create a small sustainability display.", 10, "Use reused materials to show one practical environmental habit."],
  ["spaces-017", "🏫", "SHARED SPACES", "Share a sustainability tip", "Make a useful idea visible to others.", 10, "Write one clear action on a shared noticeboard with permission."],
  ["spaces-018", "🏫", "SHARED SPACES", "Organise a class clean-up", "Work with classmates on a small shared area.", 10, "Choose a safe zone, set a ten-minute timer and sort what you collect."],
  ["spaces-019", "🏫", "SHARED SPACES", "Look after sports equipment", "Extend the life of shared gear.", 10, "Store equipment correctly and report damage before it becomes worse."],
  ["spaces-020", "🏫", "SHARED SPACES", "Keep corridors clear", "Make a shared space safer and easier to use.", 11, "Return bags and objects to the places your school provides for them."],
  ["spaces-021", "🏫", "SHARED SPACES", "Tidy a computer area", "Keep a shared digital workspace organised.", 9, "Return chargers and peripherals and follow the school’s equipment rules."],
  ["spaces-022", "🏫", "SHARED SPACES", "Reuse display materials", "Refresh a display using existing materials.", 10, "Save frames, backing paper and decorations that can be reused."],
  ["spaces-023", "🏫", "SHARED SPACES", "Make a reminder label", "Help people remember a sustainable habit.", 10, "Create a short label such as “Switch off” or “Use both sides” with permission."],
  ["spaces-024", "🏫", "SHARED SPACES", "Help clean after lunch", "Leave the eating area ready for others.", 10, "Clear your place, sort waste and follow cafeteria rules."],
  ["spaces-025", "🏫", "SHARED SPACES", "Organise a book exchange box", "Make reading materials easier to share.", 11, "Ask staff for permission and keep the box tidy and accessible."],
  ["spaces-026", "🏫", "SHARED SPACES", "Create a shared supply list", "Prevent duplicate purchases.", 10, "Check what the class already has before requesting new supplies."],
  ["spaces-027", "🏫", "SHARED SPACES", "Report a broken fixture", "Help the school fix a problem early.", 10, "Tell the responsible adult about a damaged tap, bin, light or other fixture."],
  ["spaces-028", "🏫", "SHARED SPACES", "Make a classroom plant label", "Help people understand how to care for a plant.", 9, "Add simple watering or light information with the caretaker’s approval."],
  ["spaces-029", "🏫", "SHARED SPACES", "Clean reusable decorations", "Prepare items for future events.", 10, "Wipe or wash materials safely and store them carefully once dry."],
  ["spaces-030", "🏫", "SHARED SPACES", "Set up a paper-scrap tray", "Make one-sided paper available for reuse.", 11, "Place a labelled tray near a printer or classroom desk with permission."],
  ["spaces-031", "🏫", "SHARED SPACES", "Create a walking map", "Show safe routes around school.", 10, "Mark entrances, bike parking and pedestrian paths on a reusable poster."],
  ["spaces-032", "🏫", "SHARED SPACES", "Help sort lost-and-found items", "Keep usable items from becoming waste.", 10, "Ask staff before moving anything and organise items by type."],
  ["spaces-033", "🏫", "SHARED SPACES", "Make a shared eco challenge board", "Encourage classmates to try small actions.", 10, "Use reusable or scrap materials and leave space for new challenges."],
  ["spaces-034", "🏫", "SHARED SPACES", "Create a reuse reminder", "Make a small sign encouraging reuse in a shared area.", 10, "Use scrap cardboard or existing materials and ask for permission first."],
  ["spaces-035", "🏫", "SHARED SPACES", "Prepare a shared space checklist", "Help others keep a room organised.", 10, "Write a short end-of-lesson checklist for lights, equipment, waste and furniture."]
];

// ---------- daily rotating missions ----------
// Instead of always showing the whole pool, the Missions page only shows a
// subset each day: the same subset for everyone (it depends on the date,
// not on the device), so there's always something new to check when
// students come back, and by the time the pool has rotated fully every
// mission has had its turn.
function dayOfYear(d){return Math.floor((d-new Date(d.getFullYear(),0,0))/86400000)}
const DAILY_MISSION_COUNT=10;
function dailyMissionSet(date){
  let n=missions.length;
  let count=Math.min(DAILY_MISSION_COUNT,n);
  // Move by a whole block every day: 10 fresh missions per day, with
  // no overlap between consecutive days. After 25 days the 250-mission
  // pool starts again.
  let start=(dayOfYear(date)*count)%n;
  let set=[];
  for(let i=0;i<count;i++) set.push(missions[(start+i)%n]);
  return set;
}

// A regular mission is a daily occurrence, not a one-time lifetime task.
// This lets the 250-mission pool repeat after 25 days while still allowing
// students to complete the same type of mission again on a later day.
function missionInstanceId(mission,date){
  return `${mission[0]}@${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function missionBaseId(id){
  return typeof id==='string' && id.includes('@') ? id.split('@')[0] : id;
}
function missionDone(p,mission,date){
  let instance=missionInstanceId(mission,date);
  return p.done.includes(instance) || p.done.includes(mission[0]); // old versions stay compatible
}

// ---------- special events ----------
// A few recurring or calendar-based events that make some days special:
// either a points multiplier on certain switches ("mult"), or a one-off
// bonus SWITCH that only appears while the event is active ("bonus"). Feel
// free to add more here, or change the dates to match your school's own
// calendar (Erasmus+ meeting weeks, an open day, etc.) — each one just
// needs a "check(date)" function that returns true while it should be active.
const specialEvents=[
  {id:'earthday',emoji:'🌎',title:'EARTH DAY SPECIAL',
   desc:'The whole school celebrates Earth Day today: a special SWITCH is available just for today.',
   tip:'Organise or join an Earth Day action \u2014 a clean-up, a tree planting, or simply tell your class about one habit you\u2019ve changed.',
   bonus:25,
   check:d=>d.getMonth()===3&&d.getDate()===22},
  {id:'envday',emoji:'🌱',title:'WORLD ENVIRONMENT DAY',
   desc:'A day dedicated to the environment worldwide: an extra SWITCH is unlocked today.',
   tip:'Share with your class one concrete action you\u2019re taking for the environment today.',
   bonus:25,
   check:d=>d.getMonth()===5&&d.getDate()===5},
  {id:'mobilityweek',emoji:'🚲',title:'EUROPEAN MOBILITY WEEK',
   desc:'All week long: every MOBILITY SWITCH is worth double points.',
   mult:{mobility:2},
   check:d=>d.getMonth()===8&&d.getDate()>=16&&d.getDate()<=22},
  {id:'weekend',emoji:'🌟',title:'WEEKEND BOOST',
   desc:'It\u2019s the weekend: every SWITCH you make today is worth double points!',
   mult:'all2',
   check:d=>{let g=d.getDay();return g===0||g===6}}
];
function activeEvents(date){return specialEvents.filter(e=>e.check(date))}
function pointMultiplier(missionId,events){
  let f=1;
  let category=missionBaseId(missionId).split('-')[0];
  events.forEach(e=>{
    if(e.mult==='all2') f*=2;
    else if(e.mult && (e.mult[missionId]||e.mult[category])) f*=e.mult[missionId]||e.mult[category];
  });
  return f;
}
// Synthetic "extra" missions that only exist while their event is active.
// Their id includes the year so the same event can come back next year
// without being blocked as "already done".
function eventBonusMissions(events,date){
  return events.filter(e=>e.bonus).map(e=>({
    id:`event-${e.id}-${date.getFullYear()}`,
    emoji:e.emoji,title:e.title,desc:e.desc,tip:e.tip,points:e.bonus
  }));
}

let rankTab='students';
let toastTimer;

// ---------- estimated environmental impact (indicative, for storytelling) ----------
// Simplified, conservative values meant to communicate the impact in concrete
// terms (this is an order-of-magnitude estimate, not a precise scientific figure).
const impactFactors={
  plastic:{co2:0.08,bottles:1},
  paper:{co2:0.04,bottles:0},
  waste:{co2:0.10,bottles:0},
  food:{co2:0.45,bottles:0},
  water:{co2:0.02,bottles:0},
  mobility:{co2:1.10,bottles:0},
  spaces:{co2:0.05,bottles:0}
};
function impactStats(p){
  let co2=0,bottles=0;
  (p.done||[]).forEach(id=>{
    let f=impactFactors[missionBaseId(id)];
    if(f){co2+=f.co2;bottles+=f.bottles;}
  });
  return {co2:Math.round(co2*10)/10,bottles};
}

/* =========================================================================
   SHARED DATABASE CONNECTION (Firebase Realtime Database)
   -------------------------------------------------------------------------
   Replace the value below with the URL of YOUR Firebase database (found in
   the Firebase console, "Realtime Database" section).
   Example: 'https://green-switch-aristotele-default-rtdb.europe-west1.firebasedatabase.app'
   As long as this says 'INSERISCI_QUI_URL_FIREBASE', the app still works
   locally (points, missions, photos/videos) but the leaderboard will show a
   notice instead of scores, because no shared database is connected yet.
   Full instructions are in the GUIDA_FIREBASE.txt file included in the zip.
   ========================================================================= */
const FIREBASE_DB_URL='https://greenswitch-3446c-default-rtdb.europe-west1.firebasedatabase.app';

function cloudConfigured(){
  return typeof FIREBASE_DB_URL==='string' && FIREBASE_DB_URL.startsWith('https://') && !FIREBASE_DB_URL.includes('INSERISCI_QUI');
}
function fbKey(key){return key.replace(/[.#$\[\]\/\s]/g,'_')}

let cloudStudents=null;       // last real list loaded from the database
let cloudState='idle';        // idle | loading | ready | error | unconfigured

async function syncProfileToCloud(p){
  if(!cloudConfigured()||!db.currentKey) return;
  try{
    await fetch(`${FIREBASE_DB_URL}/students/${fbKey(db.currentKey)}.json`,{
      method:'PUT',
      headers:{'Content-Type':'application/json'},
      // Note: the password hash is deliberately NEVER included here. The
      // free-tier database used by GUIDA_FIREBASE.txt is publicly readable,
      // so passwords must stay local to the device only.
      body:JSON.stringify({
        localKey:db.currentKey,
        f:p.f,l:p.l,c:p.c,sc:p.sc,
        points:p.points,switches:p.switches,impact:p.impact,
        updatedAt:Date.now()
      })
    });
  }catch(e){/* offline: local data is still safe, we'll retry later */}
}

async function loadCloudStudents(){
  if(!cloudConfigured()){cloudState='unconfigured';renderRankingArea();updateRankStat();return}
  cloudState='loading';renderRankingArea();
  try{
    let r=await fetch(`${FIREBASE_DB_URL}/students.json`);
    if(!r.ok) throw new Error('bad status');
    let d=await r.json();
    cloudStudents=d?Object.values(d):[];
    cloudState='ready';
  }catch(e){
    cloudState='error';
  }
  renderRankingArea();
  updateRankStat();
}

// ---------- local storage: several profiles on the same device ----------
function profileKey(f,l,c,sc){return (f+'|'+l+'|'+c+'|'+sc).toLowerCase().trim()}

function freshProfile(f,l,c,sc,passHash){
  return {f,l,c,sc,pass:passHash||null,points:0,streak:1,switches:0,impact:0,done:[],days:[0,0,0,0,0,0,0]};
}

// Simple password hashing (SHA-256) so the raw password is never kept in
// localStorage. This is a lightweight safeguard against a classmate on a
// shared device casually opening someone else's profile — not a real
// security system, and it is never sent to Firebase.
async function hashPassword(pass){
  try{
    const enc=new TextEncoder().encode(pass);
    const buf=await crypto.subtle.digest('SHA-256',enc);
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }catch(e){
    // Fallback for contexts without crypto.subtle (e.g. non-HTTPS local testing).
    let h=0;
    for(let i=0;i<pass.length;i++){ h=(h*31+pass.charCodeAt(i))|0; }
    return 'fallback:'+h;
  }
}

function load(){
  try{
    let v2=JSON.parse(localStorage.getItem('gsv2')||'null');
    if(v2) return v2;
  }catch(e){}
  try{
    let old=JSON.parse(localStorage.getItem('gs')||'null');
    if(old && old.user){
      let key=profileKey(old.user.f,old.user.l,old.user.c,old.user.sc);
      let p=freshProfile(old.user.f,old.user.l,old.user.c,old.user.sc);
      p.points=old.points||0;p.streak=old.streak||1;p.switches=old.switches||0;
      p.impact=old.impact||0;p.done=old.done||[];p.days=old.days||[0,0,0,0,0,0,0];
      return {deviceTotal:old.switches||0,profiles:{[key]:p},currentKey:key,photos:old.photos||[]};
    }
  }catch(e){}
  return {deviceTotal:0,profiles:{},currentKey:null,photos:[]};
}

let db=load();
function save(){localStorage.setItem('gsv2',JSON.stringify(db))}
function currentProfile(){return db.currentKey?db.profiles[db.currentKey]:null}

// ---------- real global counter (CountAPI: free, public) ----------
const COUNTER_KEY='greenswitch_michelepalazzo05lab_erasmus_switches_v1';
const COUNTER_BASE='https://countapi.mileshilliard.com/api/v1';
function formatGlobalCount(n){
  $('globalCounter').textContent=`🟢 ${n.toLocaleString('en-US')} switches turned on across the network`;
}
async function loadGlobalCount(){
  try{
    let r=await fetch(`${COUNTER_BASE}/get/${COUNTER_KEY}`);
    if(r.ok){let d=await r.json();formatGlobalCount(parseInt(d.value)||0);return}
  }catch(e){}
  $('globalCounter').textContent='🟢 switches turned on across the network';
}
async function hitGlobalCount(){
  try{
    let r=await fetch(`${COUNTER_BASE}/hit/${COUNTER_KEY}`);
    if(r.ok){let d=await r.json();formatGlobalCount(parseInt(d.value)||0)}
  }catch(e){}
}

/* ---------- SCROLL FIX: always force the view back to the top, reliably
   even on mobile (keyboard closing, layout height changing after login).
   Tried a few times in quick succession to cover every timing case. ---------- */
function forceScrollTop(){
  try{document.activeElement && document.activeElement.blur && document.activeElement.blur();}catch(e){}
  const go=()=>{window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;};
  go();
  requestAnimationFrame(go);
  setTimeout(go,60);
  setTimeout(go,250);
}

// ---------- boot / navigation ----------
function boot(){
  let p=currentProfile();
  if(!p){$('login').hidden=false;$('app').hidden=true;forceScrollTop();return}
  $('login').hidden=true;$('app').hidden=false;
  $('welcome').textContent=`Ready to make a change, ${p.f}!`;
  $('pname').textContent=p.f+' '+p.l;
  $('pmeta').textContent=p.c+' • '+p.sc;
  $('avatar').textContent=(p.f[0]+p.l[0]).toUpperCase();
  render();
  page('home');
  forceScrollTop();
  loadGlobalCount();
  loadCloudStudents();
}

function page(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  $(p).classList.add('active');
  document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('active',x.dataset.p===p));
  forceScrollTop();
  if(p==='rankings') loadCloudStudents();
}

// ---------- rendering ----------
const streakMessages=[
  [1,'Every small choice can become a measurable, collective impact.'],
  [2,'Two days in a row: consistency is starting to show.'],
  [3,'Three days: your switch is officially on.'],
  [5,'Five days in a row: you\u2019re bringing others along with you.'],
  [7,'A whole week. You\u2019re a true Green Switcher.'],
  [14,'Two weeks in a row: real impact, not just points.'],
];
function streakMessage(n){
  let m=streakMessages[0][1];
  for(const [days,msg] of streakMessages) if(n>=days) m=msg;
  return m;
}
function streakEmoji(n){
  if(n>=14) return '🌟';
  if(n>=7) return '🔥🔥';
  return '🔥';
}

function render(){
  let p=currentProfile(); if(!p) return;
  animateNum('points',p.points);
  $('switches').textContent=p.switches;
  $('impact').textContent=p.impact;
  $('streak').textContent=p.streak;
  $('wallCount').textContent=p.switches;
  $('streakEmoji').textContent=streakEmoji(p.streak);
  $('streakMsg').textContent=streakMessage(p.streak);

  let n=p.days.reduce((a,b)=>a+b,0);
  $('week').textContent=n+' / 7 days';
  $('bar').style.width=(n/7*100)+'%';
  $('days').innerHTML=['M','T','W','T','F','S','S'].map((x,i)=>`<span>${p.days[i]?'●':x}</span>`).join('');

  let imp=impactStats(p);
  $('co2Saved').textContent=imp.co2.toLocaleString('en-US');
  $('bottlesSaved').textContent=imp.bottles;

  let today=new Date();
  let events=activeEvents(today);
  let daily=dailyMissionSet(today);
  let bonusMissions=eventBonusMissions(events,today);

  renderEventBanner(events);

  let m=featuredMission(p,daily);
  let mId=missionInstanceId(m,today);
  let mPts=Math.round(m[5]*pointMultiplier(m[0],events));
  $('featured').innerHTML=`<div><small>${m[1]} ${m[2]}</small><h3>${m[3]}</h3><p>${m[4]}</p><p class="tip">💡 ${m[6]}</p></div><button onclick="complete('${mId}')">MAKE THE SWITCH +${mPts}</button>`;

  $('missionsInfo').textContent=`🔄 Today's ${daily.length} SWITCHES (out of ${missions.length} in the rotation) — a new set unlocks every day at midnight. The 250-mission cycle repeats after 25 days.`;

  let eventCards=bonusMissions.map(em=>{
    let done=p.done.includes(em.id);
    return `<div class="mission event${done?' done':''}"><small>${em.emoji} SPECIAL EVENT</small><h3>${em.title}</h3><p>${em.desc}</p><p class="tip">💡 ${em.tip}</p><button ${done?'disabled':''} onclick="complete('${em.id}')">${done?'DONE ✓':'COMPLETE +'+em.points}</button></div>`;
  });
  let dailyCards=daily.map(mm=>{
    let instanceId=missionInstanceId(mm,today);
    let done=missionDone(p,mm,today);
    let pts=Math.round(mm[5]*pointMultiplier(mm[0],events));
    return `<div class="mission${done?' done':''}"><small>${mm[1]} ${mm[2]}</small><h3>${mm[3]}</h3><p>${mm[4]}</p><p class="tip">💡 ${mm[6]}</p><button ${done?'disabled':''} onclick="complete('${instanceId}')">${done?'DONE ✓':'COMPLETE +'+pts}</button></div>`;
  });
  $('missionGrid').innerHTML=eventCards.join('')+dailyCards.join('');

  renderGallery();
  renderBadges();
}

// Shows a banner on the Home page while at least one special event is
// active (a calendar date matched, or it's the weekend).
function renderEventBanner(events){
  let el=$('eventBanner');
  if(!events.length){el.hidden=true;el.innerHTML='';return}
  el.hidden=false;
  el.innerHTML=events.map(e=>{
    let extra=e.mult==='all2'
      ?'All SWITCHES are worth double points today!'
      :(e.mult?`${Object.keys(e.mult).map(k=>k.toUpperCase()).join(', ')} SWITCH is worth double points today!`
              :'Check the Missions page for a special bonus SWITCH!');
    return `<span class="evIcon">${e.emoji}</span><div><b>${e.title}</b>${extra}</div>`;
  }).join('');
}

// The "today's move" is the first not-yet-completed mission among today's
// rotating set; if all of today's are already done, it just shows the first.
function featuredMission(p,daily){
  daily=daily||dailyMissionSet(new Date());
  let today=new Date();
  for(const m of daily) if(!missionDone(p,m,today)) return m;
  return daily[0];
}

function animateNum(id,target){
  let el=$(id);
  let start=parseInt(el.textContent)||0;
  if(start===target){el.textContent=target;return}
  let t0=performance.now(),dur=500;
  function step(t){
    let pct=Math.min(1,(t-t0)/dur);
    el.textContent=Math.round(start+(target-start)*pct);
    if(pct<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ---------- real leaderboards (data aggregated from the Firebase database) ----------
function studentsList(){
  return (cloudStudents||[]).map(s=>({
    name:(s.f||'?')+' '+(s.l||''),
    meta:(s.c||'')+' • '+(s.sc||''),
    pts:s.points||0,
    mine:s.localKey===db.currentKey
  })).sort((a,b)=>b.pts-a.pts);
}
function classesList(){
  let map={};
  (cloudStudents||[]).forEach(s=>{
    let key=(s.c||'').toLowerCase()+'|'+(s.sc||'').toLowerCase();
    if(!map[key]) map[key]={name:s.c||'—',meta:s.sc||'',pts:0};
    map[key].pts+=s.points||0;
  });
  let p=currentProfile();
  return Object.values(map).map(x=>({
    ...x,
    mine:!!(p && x.name.toLowerCase()===p.c.toLowerCase() && x.meta.toLowerCase()===p.sc.toLowerCase())
  })).sort((a,b)=>b.pts-a.pts);
}
function schoolsList(){
  let map={};
  (cloudStudents||[]).forEach(s=>{
    let key=(s.sc||'').toLowerCase();
    if(!map[key]) map[key]={name:s.sc||'—',meta:'',pts:0};
    map[key].pts+=s.points||0;
  });
  let p=currentProfile();
  return Object.values(map).map(x=>({
    ...x,
    mine:!!(p && x.name.toLowerCase()===p.sc.toLowerCase())
  })).sort((a,b)=>b.pts-a.pts);
}
function currentList(type){
  return type==='students'?studentsList():type==='classes'?classesList():schoolsList();
}

function updateRankStat(){
  if(cloudState!=='ready'){$('rankpos').textContent='#—';return}
  let a=studentsList();
  let idx=a.findIndex(x=>x.mine);
  $('rankpos').textContent=idx>-1?'#'+(idx+1):'#—';
  $('rankpos').classList.toggle('top3',idx>-1&&idx<3);
}

function renderRankingArea(){
  let podium=$('podium'), ranking=$('ranking');
  if(cloudState==='unconfigured'){
    podium.innerHTML='';
    ranking.innerHTML=`<div class="rank-msg">📡 The shared leaderboard isn't connected to a database yet.<br>Ask whoever manages the app to finish the setup (see the Firebase setup guide included with the project).</div>`;
    return;
  }
  if(cloudState==='loading'){
    podium.innerHTML='';
    ranking.innerHTML=`<div class="rank-msg">Loading leaderboard…</div>`;
    return;
  }
  if(cloudState==='error'){
    podium.innerHTML='';
    ranking.innerHTML=`<div class="rank-msg err">⚠️ We couldn't load the leaderboard. Check your connection and try again.</div>`;
    return;
  }
  let a=currentList(rankTab);
  if(!a.length){
    podium.innerHTML='';
    ranking.innerHTML=`<div class="rank-msg">No scores here yet. Make the first SWITCH and you'll be the one to open the leaderboard! 🌱</div>`;
    return;
  }
  let top3=a.slice(0,3), rest=a.slice(3);
  let order=[1,0,2].filter(i=>top3[i]);
  podium.innerHTML=order.map(i=>{
    let x=top3[i];
    return `<div class="spot p${i+1}"><div class="rank">${i+1}</div><div class="name">${x.name}</div><div class="meta">${x.meta}</div><div class="pts">${x.pts} pt</div></div>`;
  }).join('');
  ranking.innerHTML=rest.length?rest.map((x,i)=>{
    return `<div class="row${x.mine?' mine':''}"><b>#${i+4}</b><div><b>${x.name}</b><small>${x.meta}</small></div><span class="score">${x.pts} pt</span></div>`;
  }).join(''):'';
}
function rank(type){
  rankTab=type;
  renderRankingArea();
}

// ---------- badges ----------
function isTopStudent(){
  let a=studentsList();
  return cloudState==='ready' && a.length>0 && a[0].mine;
}
function renderBadges(){
  let p=currentProfile(); if(!p) return;
  let earned={
    starter:p.switches>=1,
    waste:p.done.some(id=>missionBaseId(id)==='waste'),
    mobility:p.done.some(id=>missionBaseId(id)==='mobility'),
    league:isTopStudent()
  };
  document.querySelectorAll('[data-badge]').forEach(el=>{
    let key=el.dataset.badge;
    if(!(key in earned)) return;
    let was=el.dataset.earned==='1';
    let now=earned[key];
    el.dataset.earned=now?'1':'0';
    if(now && !was){el.classList.add('pop');setTimeout(()=>el.classList.remove('pop'),500)}
  });
}

// ---------- gallery ----------
function renderGallery(){
  if(!db.photos.length){
    $('gallery').innerHTML='<div class="empty">No photos or videos yet — be the first to add one to the Wall!</div>';
    return;
  }
  $('gallery').innerHTML=db.photos.map((item,i)=>{
    // db.photos used to contain only strings (older versions, photos only):
    // we treat those as images to stay backward compatible.
    let isVideo=item && typeof item==='object' && item.type==='video';
    let src=item && typeof item==='object' ? item.src : item;
    let media=isVideo
      ?`<video src="${src}" controls playsinline preload="metadata"></video>`
      :`<img src="${src}">`;
    return `<figure>${media}<button onclick="removePhoto(${i})" aria-label="Remove">×</button></figure>`;
  }).join('');
}
function removePhoto(i){
  db.photos.splice(i,1);
  save();
  renderGallery();
}

// ---------- feedback: toast + confetti ----------
function toast(msg,warn){
  let el=$('toast');
  el.innerHTML=msg.replace(/\+(\d+)/,'<b>+$1</b>');
  el.classList.toggle('warn',!!warn);
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'),2400);
}
function burstConfetti(){
  let colors=['#c8f24e','#78a83d','#123726','#ffffff'];
  let host=$('confetti');
  for(let i=0;i<24;i++){
    let el=document.createElement('div');
    el.className='confetti-piece';
    el.style.left=(Math.random()*100)+'vw';
    el.style.background=colors[i%colors.length];
    el.style.animationDelay=(Math.random()*0.25)+'s';
    el.style.animationDuration=(1.1+Math.random()*0.6)+'s';
    host.appendChild(el);
    setTimeout(()=>el.remove(),2000);
  }
}

// ---------- actions ----------
function complete(id){
  let p=currentProfile(); if(!p) return;

  let today=new Date();
  let events=activeEvents(today);
  let baseId=missionBaseId(id);
  let m=missions.find(x=>x[0]===baseId);
  let pts;

  if(m){
    // A normal mission must be completed through today's dated instance.
    let expected=missionInstanceId(m,today);
    if(id!==expected && id!==m[0]) return;
    if(missionDone(p,m,today)){
      toast('You’ve already completed this SWITCH today — choose another one!',true);
      return;
    }
    pts=Math.round(m[5]*pointMultiplier(m[0],events));
    p.done.push(expected);
  }else{
    // Not a regular mission: it must be a synthetic special-event SWITCH.
    // If its event isn't active anymore (e.g. a stale button from yesterday),
    // just ignore the click.
    let em=eventBonusMissions(events,today).find(x=>x.id===id);
    if(!em) return;
    if(p.done.includes(id)){
      toast('You’ve already completed this SWITCH — choose another one!',true);
      return;
    }
    pts=em.points;
    p.done.push(id);
  }

  p.points+=pts;
  p.switches++;
  p.impact++;
  p.days[(today.getDay()+6)%7]=1;
  db.deviceTotal++;
  save();
  render();
  toast(`SWITCH COMPLETE! +${pts} GREEN POINTS`);
  burstConfetti();
  hitGlobalCount();
  syncProfileToCloud(p).then(loadCloudStudents);
}

// ---------- bindings ----------
$('form').onsubmit=async e=>{
  e.preventDefault();
  let f=$('first').value.trim(),l=$('last').value.trim(),c=$('class').value.trim(),sc=$('school').value.trim(),pass=$('pass').value;
  let err=$('formError');
  if(!f||!l||!c||!sc||!pass){
    err.textContent='Please fill in every field: first name, last name, class, school and password.';
    err.hidden=false;
    return;
  }
  if(pass.length<4){
    err.textContent='Your password must be at least 4 characters long.';
    err.hidden=false;
    return;
  }
  let key=profileKey(f,l,c,sc);
  let existing=db.profiles[key];
  let passHash=await hashPassword(pass);

  if(existing){
    if(existing.pass && existing.pass!==passHash){
      err.textContent='Wrong password for this profile. Try again, or use "Forgot your password?" below.';
      err.hidden=false;
      return;
    }
    if(!existing.pass) existing.pass=passHash; // profile created before passwords existed
  }else{
    db.profiles[key]=freshProfile(f,l,c,sc,passHash);
  }

  err.hidden=true;
  let isNew=!existing;
  db.currentKey=key;
  save();
  boot();
  if(isNew) syncProfileToCloud(db.profiles[key]);
};

$('forgotPass').onclick=()=>{
  let f=$('first').value.trim(),l=$('last').value.trim(),c=$('class').value.trim(),sc=$('school').value.trim();
  let err=$('formError');
  if(!f||!l||!c||!sc){
    err.textContent='Fill in your first name, last name, class and school first, then use "Forgot your password?".';
    err.hidden=false;
    return;
  }
  let key=profileKey(f,l,c,sc);
  if(!db.profiles[key]){
    err.textContent='No profile found with these details yet — just choose a password and log in normally.';
    err.hidden=false;
    return;
  }
  if(!confirm('Resetting your password will also reset this profile\u2019s points, switches and badges. Continue?')) return;
  delete db.profiles[key];
  save();
  err.hidden=true;
  toast('Profile reset. Enter a new password and log in again to start fresh.');
};

$('exit').onclick=()=>{db.currentKey=null;save();boot()};

$('shareBtn').onclick=async()=>{
  let p=currentProfile(); if(!p) return;
  let imp=impactStats(p);
  let text=`🌱 I've made ${p.switches} GREEN SWITCHES (${p.points} points) in the Erasmus+ GREEN SWITCH project, with an estimated impact of ${imp.co2} kg of CO₂ saved. Join in too!`;
  if(navigator.share){
    try{ await navigator.share({title:'GREEN SWITCH',text}); }
    catch(e){/* sharing cancelled by the user: no action needed */}
    return;
  }
  try{
    await navigator.clipboard.writeText(text);
    toast('Text copied: paste it wherever you\u2019d like to share it! \ud83d\udccb');
  }catch(e){
    toast('We couldn\u2019t copy the text automatically.',true);
  }
};

$('resetBtn').onclick=()=>{
  let p=currentProfile(); if(!p) return;
  if(!confirm('This will reset your points, switches and badges. Continue?')) return;
  Object.assign(p,{points:0,streak:1,switches:0,impact:0,done:[],days:[0,0,0,0,0,0,0]});
  save();
  render();
  toast('Progress reset \u2014 fresh start!');
  syncProfileToCloud(p).then(loadCloudStudents);
};

document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>page(b.dataset.p));
document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>page(b.dataset.go));
document.querySelectorAll('.switcher button').forEach(b=>b.onclick=()=>{
  document.querySelectorAll('.switcher button').forEach(x=>x.classList.remove('active'));
  b.classList.add('active');
  rank(b.dataset.r);
});

// Adds an item (photo or video) to the Wall. Saving can fail if the device
// has run out of free space in the browser's storage (videos are much
// heavier than compressed photos): in that case the addition is rolled back
// and the user is warned, instead of silently losing progress.
function addMedia(type,src){
  db.photos.unshift({type,src});
  if(db.photos.length>24) db.photos.length=24;
  try{
    save();
    renderGallery();
    toast(type==='video'?'Video added to the Wall \ud83c\udfa5':'Photo added to the Wall \ud83d\udcf8');
  }catch(e){
    db.photos.shift();
    toast('Not enough space on this device to save this file: try a shorter video or a photo.',true);
  }
}

const MAX_VIDEO_MB=20;
$('photo').onchange=e=>{
  let f=e.target.files[0];
  e.target.value='';
  if(!f) return;

  if(f.type.startsWith('video/')){
    if(f.size>MAX_VIDEO_MB*1024*1024){
      toast(`This video is too large (max ${MAX_VIDEO_MB}MB): try recording a shorter one.`,true);
      return;
    }
    let reader=new FileReader();
    reader.onerror=()=>toast('Couldn\u2019t read this file.',true);
    reader.onload=()=>addMedia('video',reader.result);
    reader.readAsDataURL(f);
    return;
  }

  if(!f.type.startsWith('image/')){
    toast('Unsupported format: please upload a photo or a video.',true);
    return;
  }

  let reader=new FileReader();
  reader.onerror=()=>toast('Couldn\u2019t read this file.',true);
  reader.onload=()=>{
    let img=new Image();
    img.onerror=()=>toast('This file isn\u2019t a valid image.',true);
    img.onload=()=>{
      let maxW=800;
      let scale=Math.min(1,maxW/img.width);
      let w=Math.round(img.width*scale),h=Math.round(img.height*scale);
      let canvas=document.createElement('canvas');
      canvas.width=w;canvas.height=h;
      canvas.getContext('2d').drawImage(img,0,0,w,h);
      let dataUrl=canvas.toDataURL('image/jpeg',0.72);
      addMedia('image',dataUrl);
    };
    img.src=reader.result;
  };
  reader.readAsDataURL(f);
};

boot();
