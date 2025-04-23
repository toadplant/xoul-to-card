let xoul;


document.getElementById('jsonInput').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            xoul = JSON.parse(event.target.result);

            // PROCESS JSON
            let processed = chara_card_v2(xoul);

            // Create download link
            const blob = new Blob([JSON.stringify(processed, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.className = "card-link btn btn-primary me-2"
            link.download = xoul.name + '.json';
            link.innerText = 'Download ' + xoul.name + '.json';

            const wyvern_link = document.createElement('a');
            wyvern_link.href = "https://app.wyvern.chat/characters/edit/new";
            wyvern_link.className = "card-link btn btn-outline-primary"
            wyvern_link.innerText = 'Upload on Wyvern';

            const output = document.getElementById('output');
            output.innerHTML = ''; // Clear old links
            output.appendChild(link);
            output.appendChild(wyvern_link);

        } catch (err) {
            alert('Invalid JSON file');
        }
    };
    reader.readAsText(file);
});

// xoul to chara_card_v2 processing function
function chara_card_v2(xoul) {
    // Add or transform as needed. Here's an example:
    return {
        "spec": "chara_card_v2",
        "spec_version": "2.0",
        "name": xoul.name,
        "description": "Age: " + xoul.age + "\nGender: " + xoul.gender + "\nBackstory: " + xoul.backstory + "\nPersonality: " + xoul.definition + "\n",
        "personality": "",
        "scenario": xoul.default_scenario,
        "first_mes": xoul.greeting,
        "mes_example": xoul.samples,
        "creator_notes": xoul.tagline + "\n" + xoul.bio,
        "system_prompt": "",
        "post_history_instructions": "",
        "alternate_greetings": [],
        "tags": xoul.social_tags,
        "creator": "",
        "character_version": "v2",
        "extensions": {
            "depth_prompt": {
                "prompt": "",
                "depth": 4
            },
            "visual_description": ""
        },
        "data": {
            "name": xoul.name,
            "description": "Age: " + xoul.age + "\nGender: " + xoul.gender + "\nBackstory: " + xoul.backstory + "\nPersonality: " + xoul.definition + "\n",
            "personality": "",
            "scenario": xoul.default_scenario,
            "first_mes": xoul.greeting,
            "mes_example": xoul.samples,
            "creator_notes": xoul.tagline + "\n" + xoul.bio,
            "system_prompt": "",
            "post_history_instructions": "",
            "alternate_greetings": [],
            "tags": xoul.social_tags,
            "creator": "",
            "character_version": "v2",
            "extensions": {
                "depth_prompt": {
                    "prompt": "",
                    "depth": 4
                },
                "visual_description": ""
            }
        }
    };
}

