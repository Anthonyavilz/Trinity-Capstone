const { Helm, Chest, Leg } = require('../models/ToTk-Models/totkModels')

const seed = async () => {
    await Helm.bulkCreate([
        {
            helmName: 'Mask of Awakening',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mask_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Thundra Plateau',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280863',
            helmEffect: 'None'
        },     
        {
            helmName: 'Barbarian Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_helm-armor-zelda-totk-wiki-guide.png',
            helmDefense: 3,
            helmLocation: 'Robred Dropoff Cave', 
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279726',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Charged Headdress',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Dracozo River',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282574',
            helmEffect: 'Stormy Weather Charge'
        },
        {
            helmName: 'Climbers Bandanna',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbers_bandanna_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Ploymous Mountain Cave',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279675',
            helmEffect: 'Climb Speed Up'
        },
        {
            helmName: 'Dark Hood',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Bargainer Statue',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279744',
            helmEffect: 'None'
        },
        {
            helmName: 'Hood of The Depths',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hood_of_the_depths_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Bargainer Statue',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279748',
            helmEffect: 'Gloom Resistance'
        },
        {
            helmName: 'Desert Voe',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_headband_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 5,
            helmLocation: 'Saulas Shop',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279433',
            helmEffect: 'Heat Resistance'
        },
        {
            helmName: 'Ember Headdress',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 2,
            helmLocation: 'YunoboCo HQ South',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280548',
            helmEffect: 'Hot Weather Attack'
        },
        {
            helmName: 'Evil Spirit Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil_spirit_mask-armor-zelda-totk-wiki-guide.png',
            helmDefense: 4,
            helmLocation: 'South Lomei Prophecy',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280877',
            helmEffect: 'Stealth Up'
        },
        {
            helmName: 'Fierce Deitys Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 5,
            helmLocation: 'Skull Lake Cave',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280133',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Flamebreaker Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Armor Shop Goron City',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416',
            helmEffect: 'Flame Guard'
        },
        {
            helmName: 'Froggy Hood',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Potential Princess Sightings',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847',
            helmEffect: 'Slip Resistance'
        },
        {
            helmName: 'Frostbite Headdress',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 2,
            helmLocation: 'Lake Kilsie',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280713',
            helmEffect: 'Cold Weather Attack'
        },
        {
            helmName: 'Glide Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 2,
            helmLocation: 'Valor Island',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279426',
            helmEffect: 'Skydive Mobility Up'
        },
        {
            helmName: 'Cap of the Hero',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Depths',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280813',
            helmEffect: 'None'
        },
        {
            helmName: 'Hylian Hood',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Mubs Shop Lookout Landing',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419',
            helmEffect: 'None'
        },
        {
            helmName: 'Miners Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Abandoned Kara Kara Mine',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279725',
            helmEffect: 'Glow'
        },
        {
            helmName: 'Mystic Headpiece',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_headpiece_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Koltin Shop',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132',
            helmEffect: 'Rupee Padding'
        },
        {
            helmName: 'Phantom Helmet',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_helmet_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 8,
            helmLocation: 'Puffer Beach Overhead Cave',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280851',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Radiant Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Armor Shop Kakariko Village',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443',
            helmEffect: 'None'
        },
        {
            helmName: 'Royal Guard Cap',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_cap_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 4,
            helmLocation: 'Princess Zeldas Room',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279452',
            helmEffect: 'None'
        },
        {
            helmName: 'Rubber Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Sarjon Woods Cave',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282074',
            helmEffect: 'Shock Resistance'
        },
        {
            helmName: 'Cap of the Sky',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Depths',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280831',
            helmEffect: 'None'
        },
        {
            helmName: 'Snowquill Headdress',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_headdress_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Armor Shop Rito Village',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409',
            helmEffect: 'Cold Resistance'
        },
        {
            helmName: 'Soldiers Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 4,
            helmLocation: 'Royal Hidden Passage',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738',
            helmEffect: 'None'
        },
        {
            helmName: 'Stealth Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 2,
            helmLocation: 'Armor Shop Kakariko Village',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427',
            helmEffect: 'Stealth Up'
        },
        {
            helmName: 'Cap of Time',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Depths',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280839',
            helmEffect: 'None'
        },
        {
            helmName: 'Tingles Hood',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_hood_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 2,
            helmLocation: 'Eighth Heroine Cave',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280872',
            helmEffect: 'None'
        },
        {
            helmName: 'Cap of Twilight',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Gleeok Den',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280822',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Cap of the Wild',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 7,
            helmLocation: 'Hebra Dark Skeleton',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280784',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Cap of the Wind',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/cap_of_wind_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Tingel Island Chasm',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280268',
            helmEffect: 'Attack Up'
        },
        {
            helmName: 'Yiga Mask',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_mask_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 1,
            helmLocation: 'Great Plateau',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279437',
            helmEffect: 'Stealth Up'
        },
        {
            helmName: 'Zonaite Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 4,
            helmLocation: 'Light Case Island',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279584',
            helmEffect: 'Energy Up'
        },
        {
            helmName: 'Zora Helm',
            helmURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_helm_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            helmDefense: 3,
            helmLocation: 'Floating Scales Island',
            helmLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279275',
            helmEffect: 'Swim Speed Up'
        }
    ])
    await Chest.bulkCreate([
        {
            chestName: 'Tunic of Awakening',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Ancient Columns',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280855',
            chestEffect: 'None'
        },
        {
            chestName: 'Barbarian Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Crenel Hills Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279638',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Charged Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Dracoxo Lake',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282578',
            chestEffect: 'Stormy Weather Charge'
        },
        {
            chestName: 'Climbing Gear',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbing_gear_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Hyrule Plain Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=276862',
            chestEffect: 'Climb Speed Up'
        },
        {
            chestName: 'Dark Tunic',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Bargainer Statue',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277770',
            chestEffect: 'None'
        },
        {
            chestName: 'Tunic of the Depth',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic-of-the-depths-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png',
            chestDefense: 3,
            chestLocation: 'Bargainer Statue',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277770',
            chestEffect: 'Gloom Resistance'
        },
        {
            chestName: 'Desert Voe Spaulder',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_spaulder_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 5,
            chestLocation: 'Gerudo Secert Club',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279713',
            chestEffect: 'Heat Resistance'
        },
        {
            chestName: 'Ember Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 2,
            chestLocation: 'Goronbi River Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280706',
            chestEffect: 'Hot Weather Attack'
        },
        {
            chestName: 'Evil Spirit Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil-spirit-armor-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png',
            chestDefense: 4,
            chestLocation: 'Lomei Labyrinth Island Prophecy',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280412',
            chestEffect: 'Stealth Up'
        },
        {
            chestName: 'Fierce Dietys Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 5,
            chestLocation: 'Citadel Ruins Summit Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280700',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Flamebreaker Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Armor Shop Goron City',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416',
            chestEffect: 'Flame Guard'
        },
        {
            chestName: 'Froggy Sleeve',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_sleeve_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Potential Princess Sightings',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847',
            chestEffect: 'Slip Resistance'
        },
        {
            chestName: 'Frostbite Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 2,
            chestLocation: 'Brightcap Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279996',
            chestEffect: 'Cold Weather Attack'
        },
        {
            chestName: 'Glide Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 2,
            chestLocation: 'Courage Island',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277843',
            chestEffect: 'Skydive Mobility Up'
        },
        {
            chestName: 'Tunic of the Hero',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Depths',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280804',
            chestEffect: 'None'
        },
        {
            chestName: 'Hylian Tunic',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Mubs Shop Lookout Landing',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419',
            chestEffect: 'None'
        },
        {
            chestName: 'Miners Top',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_top_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Daphnes Canyon Mine',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279717',
            chestEffect: 'Glow'
        },
        {
            chestName: 'Mystic Robe',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_robe_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Koltin Shop',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132',
            chestEffect: 'Rupee Padding'
        },
        {
            chestName: 'Phantom Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 8,
            chestLocation: 'Tamino River Downstream Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280846',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Radiant Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Armor Shop Kakariko Village',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443',
            chestEffect: 'None'
        },
        {
            chestName: 'Royal Guard Uniform',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_uniform_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 4,
            chestLocation: 'Guards Chamber',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279453',
            chestEffect: 'None'
        },
        {
            chestName: 'Rubber Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Whistling Hill Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279731',
            chestEffect: 'Shock Resistance'
        },
        {
            chestName: 'Tunic of the Sky',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Depths',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280833',
            chestEffect: 'None'
        },
        {
            chestName: 'Snowquill Tunic',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_tunic_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Armor Shop Rito Village',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409',
            chestEffect: 'Cold Resistance'
        },
        {
            chestName: 'Soldiers Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 4,
            chestLocation: 'Royal Hidden Passage',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738',
            chestEffect: 'None'
        },
        {
            chestName: 'Stealth Chest Guard',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_chest_guard_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 2,
            chestLocation: 'Armor Shop Kakariko Village',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427',
            chestEffect: 'Stealth Up'
        },
        {
            chestName: 'Tunic of Time',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Depths',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280838',
            chestEffect: 'None'
        },
        {
            chestName: 'Tingles Shirt',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_shirt_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 2,
            chestLocation: 'Dueling Peaks South Cave',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280869',
            chestEffect: 'None'
        },
        {
            chestName: 'Tunic of Twilight',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Rist Mine',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280819',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Tunic of the Wild',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 7,
            chestLocation: 'Gerudo Dark Skeleton',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280785',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Tunic of the Wind',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tunic_of_the_wind-armor-zelda-totk-wiki-guide.png',
            chestDefense: 3,
            chestLocation: 'Depths',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280798',
            chestEffect: 'Attack Up'
        },
        {
            chestName: 'Yiga Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 1,
            chestLocation: 'Akkala Ancient Tech Lab',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279438',
            chestEffect: 'Stealth Up'
        },
        {
            chestName: 'Zonaite Waistguard',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_waistguard_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 4,
            chestLocation: 'Yansamin Shrine',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279590',
            chestEffect: 'Energy Up'
        },
        {
            chestName: 'Zelm Armor',
            chestURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_armor_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            chestDefense: 3,
            chestLocation: 'Restoring the Zora Armor Quest',
            chestLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279692',
            chestEffect: 'Swim Speed Up'
        },
    ])
    await Leg.bulkCreate([
        {
            legName: 'Trousers of Awakening',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_awakening_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Coliseum Ruins',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280868',
            legEffect: 'None'
        },
        {
            legName: 'Barbarian Leg Wraps',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/barbarian_wraps_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Walnot Mountain Cave',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279730',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Charged Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/charged_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Damal Forest',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282577',
            legEffect: 'Stormy Weather Charge'
        },
        {
            legName: 'Climbing Boots',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/climbing_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Upland Zorana Byroad',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279677',
            legEffect: 'Climb Speed Up'
        },
        {
            legName: 'Dark Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/dark_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Bargainer Statue',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279737',
            legEffect: 'None'
        },
        {
            legName: 'Gaiters of the Depths',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/gaiters-of-the-depths-armor-piece-zelda-tears-of-the-kingdom-wiki-guide-200px-min.png',
            legDefense: 3,
            legLocation: 'Bargainer Statue',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279748',
            legEffect: 'Gloom Resistance'
        },
        {
            legName: 'Desert Voe Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/desert_voe_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 5,
            legLocation: 'Gerudo Secret Club',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279714',
            legEffect: 'Heat Resistance'
        },
        {
            legName: 'Ember Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/ember_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 2,
            legLocation: 'Cephia Lake Cave',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279831',
            legEffect: 'Hot Weather Attack'
        },
        {
            legName: 'Evil Spirit Greaves',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/evil_spirit_greaves-armor-zelda-totk-wiki-guide.png',
            legDefense: 4,
            legLocation: 'North Lomei Prophecy',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280876',
            legEffect: 'Stealth Up'
        },
        {
            legName: 'Fierce Deitys Boots',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/fierce_deitys_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 5,
            legLocation: 'Ancient Tree Stump',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279654',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Flamebreaker Boots',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/flamebreaker_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Armor Shop Goron City',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279416',
            legEffect: 'Flame Guard'
        },
        {
            legName: 'Froggy Leggings',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/froggy_leggings_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Potential Princess Sightings',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=277847',
            legEffect: 'Slip Resistance'
        },
        {
            legName: 'Frostbite Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/frostbite_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 2,
            legLocation: 'Hebra Headspring Cave',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280711',
            legEffect: 'Cold Weather Attack'
        },
        {
            legName: 'Glide Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/glide_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 2,
            legLocation: 'Bravery Island',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279423',
            legEffect: 'Skydive Mobility Up'
        },
        {
            legName: 'Trousers of the Hero',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_hero_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Depths',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280806',
            legEffect: 'None'
        },
        {
            legName: 'Hylian Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/hylian_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Mubs Shop Lookout Landing',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279419',
            legEffect: 'None'
        },
        {
            legName: 'Miners Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/miners_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Hylian Canyon Mine',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279724',
            legEffect: 'Glow'
        },
        {
            legName: 'Mystic Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/mystic_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Koltin Shop',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=281132',
            legEffect: 'Rupee Padding'
        },
        {
            legName: 'Phantom Greaves',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/phantom_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 8,
            legLocation: 'Ancient Altar Ruins',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280848',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Radiant Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/radiant_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Armor Shop Kakariko Village',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279443',
            legEffect: 'None'
        },
        {
            legName: 'Royal Guard Boots',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/royal_guard_boots_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 4,
            legLocation: 'Kings Study',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279448',
            legEffect: 'None'
        },
                {
            legName: 'Armor Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/rubber_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Horon Lagoon Cave',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=282075',
            legEffect: 'Shock Resistance'
        },
        {
            legName: 'Trousers of the Sky',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_sky_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Depth',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280829',
            legEffect: 'None'
        },
        {
            legName: 'Snowquill Trousers',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/snowquill_trousers_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Armor Shop Rito Village',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279409',
            legEffect: 'Cold Resistance'
        },
        {
            legName: 'Soldiers Greaves',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/soldiers_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 4,
            legLocation: 'Royal Hidden Passage',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280738',
            legEffect: 'None'
        },
        {
            legName: 'Stealth Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/stealth_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 2,
            legLocation: 'Armor Shop Kakariko Village',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279427',
            legEffect: 'Stealth Up'
        },
        {
            legName: 'Trousers of Time',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_time_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Depths',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280835',
            legEffect: 'None'
        },
        {
            legName: 'Tingles Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/tingles_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 2,
            legLocation: 'Cape Cales Cliffbase Cave',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280875',
            legEffect: 'None'
        },
        {
            legName: 'Trousers of Twilight',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_twilight_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Depths',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280816',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Trousers of the Wild',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_the_wild_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 7,
            legLocation: 'Eldin Dark Skeleton',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280786',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Trousers of the Wind',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/trousers_of_wind_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Cresia Pit Mine',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279270',
            legEffect: 'Attack Up'
        },
        {
            legName: 'Yiga Tights',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/yiga_tights_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 1,
            legLocation: 'Maritta Branch',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279436',
            legEffect: 'Stealth Up'
        },
        {
            legName: 'Zonaite Shin Guard',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zonaite_shin_guards_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 4,
            legLocation: 'Sky Mine',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=280286',
            legEffect: 'Energy Up'
        },
        {
            legName: 'Zora Greaves',
            legURL: 'https://zeldatearsofthekingdom.wiki.fextralife.com/file/Zelda-Tears-of-the-Kingdom/zora_greaves_armor_zelda_tears_of_the_kingdom_wiki_guide_200px.png',
            legDefense: 3,
            legLocation: 'Ancient Zora Waterworks',
            legLocationURL: 'https://mapgenie.io/zelda-tears-of-the-kingdom/maps/hyrule?locationIds=279700',
            legEffect: 'Swim Speed Up'
        }
    ])
    console.log('seed file done!')
}

module.exports = seed