import './RodaDoAno.css'

export const RodaDoAno = () => {

    const listaRodaDoAno = [
        {
            sabbat: 'Samhain',
            date: "October 31st",
            phrase1: 'Witches consider this Sabbat as the beginning of a new year, marked by the death of the Sun God, announcing winter and, with it, the end of the harvest. During this period, it is common to prepare grains and sacrifice some animals to be consumed during the winter, as many would not survive the harsh weather conditions in large numbers.',
            phrase2: 'Samhain is related to death in several aspects: the death of the Sun God and the end of the harvest. Furthermore, it is believed that it is during this Sabbat that the veil that separates the world of the living and the dead becomes thinner, facilitating contact with ancestors and loved ones who have passed away.',
            phrase3: 'We cannot forget the cyclical nature of life: the God, in this period, is already an embryo in the womb of the Goddess, who is in her elder stage, the wise witch.',
            phrase4: 'Among the traditions of that night is supper in silence with family members, keeping empty places with dishes placed on the table to honor those who have already passed away. Its most striking symbol is probably the pumpkin with a candle inside, placed in front of houses. It was believed that the shadow cast by them scared away evil spirits that could be wandering among the good.'
        },
        {
            sabbat: 'Yule',
            date: 'December 21st or 22nd.',
            phrase1: 'Yule is the Sabbat that marks the winter solstice and the rebirth of the Sun God. Still in her elder stage, the Goddess gives birth to the new Sun God, beginning the period known as "the return of light". This rebirth announces that winter is about to leave, making room for a new phase of joy.',
            phrase2: 'At this moment, a battle takes place between two faces of the Sun God: the King of Holly (darkness), who has reigned since the Sabbat of Litha, and the King of Oak (light), who will emerge victorious this time, indicating that the sun will remain. stronger and stronger until it reached its apogee in Litha.',
            phrase3: 'During this celebration, it was common to place trees inside houses to offer shelter to the spirits of nature. These trees were decorated, often with mistletoe and holly, with a pentagram at the top. Gifts were offered to the spirits and food to animals that had difficulty finding food due to the extreme cold, creating a mutual connection of care and protection between people and the spirits of nature.',
            phrase4: 'As Yule is marked by rebirth, it is a time of happiness and celebration of life, with dancing, music and food to celebrate the new born God.'
        },
        {
            sabbat: 'Imbolc',
            date: 'February 1st or 2nd',
            phrase1: 'Strongly related to the Goddess Brigid, Goddess of fire, Sabbat Imbolc represents the growth of the Sun God. During this period, the Goddess returns to her young form and breastfeeds the new God.',
            phrase2: 'The celebration of Imbolc mainly involves candles and bonfires, but lighting torches or anything related to fire was also a custom. It was believed that the heat from the flames would drive away winter and bring more joy.',
            phrase3: 'The candles, usually orange, represented not only the growth of the Sun God, but also the energy, joy and warmth of life. After all, it is a time of purification after a long winter. Bonfires represent the enlightenment of the spirit, the search for new knowledge, creative power and new life.',
            phrase4: 'Even though it is still winter, this Sabbat shows that spring is on the way and is full of hope.'
        },
        {
            sabbat: 'Ostara',
            date: 'March 21st or 22nd',
            phrase1: 'It happens during the spring equinox, when the Earth is perfectly aligned with the sun and day and night are of the same length, bringing by nature a moment of balance. ',
            phrase2: 'It is during this period that the joy and renewal brought by spring is celebrated, a renewal that was translated into the growth of plants and the energy of animals coming out of hibernation and returning to nature.',
            phrase3: 'At this moment, the Sun God is in puberty and full of energy while the Goddess, who is once again in her maiden phase, is also full of energy and life again.',
            phrase4: 'Eostre, Goddess of resurrection, birth and Spring, is venerated during this Sabbat. Breads and cakes were made as offerings in her honor, as well as colorful egg decorations in vibrant tones. These eggs enchanted Eostre deeply, so much so that she asked a rabbit to deliver them from house to house so that everyone could share in this joy.'
        },
        {
            sabbat: 'Beltane',
            date: 'April 30th or May 1st',
            phrase1: 'It represents the peak of fertility and love, when the young God reaches his adult stage and attracts the attention of the Goddess, uniting with her to generate life and growth. Fires are lit, mainly bonfires, representing sexual energy, life and love, also serving for purification.',
            phrase2: 'Some customs involved going out at night to collect flowers in the forest and distributing them among the residents, who in return offered meals prepared especially for this occasion. Children born during Beltane were considered children of God and the Goddess themselves. Another custom that was also widely celebrated was the practice of sexual acts in the forest.',
            phrase3: 'Fire, despite being a common element in all Sabbats, gains great prominence during Beltane, representing the viability and fertile strength of the God.',
            phrase4: "A large bonfire was set up and people jumped over it or danced around it in a purification ritual and, at the end, people took some of the ashes from that bonfire and took it home, with the intention of taking the God's energy, attracting good energies and ward off bad times."
        },
        {
            sabbat: 'Litha',
            date: 'June 21st or 22nd',
            phrase1: "It marks the summer solstice and represents the height of the God's power, having the longest day and the shortest night of the year. It is a period of harvesting the fruits that were generated by the planted seeds. Its celebration usually brought together people and animals around rivers and sides, celebrating the power of the God, who brought with him the hottest period of the year.",
            phrase2: 'It is the time to carry out physical and mental healing, since the strong light of God, in addition to feeding the plants and providing heat for us to survive, is also capable of freeing us from problems and unwanted feelings.',
            phrase3: 'As this Sabbat is dedicated entirely to the Sun God, it is recommended to keep at least one candle burning throughout the day, so that the energy of the fire reaches the sun. Bonfires and their purification are also important characters in the Litha. It is common for amulets to be made a week before Litha and then consecrated under the Sun.',
            phrase4: 'Just like in the Yule sabbat, the two faces of God clash again, passing the reign to the King of Holly (darkness), who emerges victorious from the battle. Soon, starting from Litha, the Sun starts to get weaker and weaker.'
        },
        {
            sabbat: 'Lughnasadh',
            date: 'August 1st or 2nd',
            phrase1: "The big celebration of this Sabbat is the harvest. It is during this period that all of Earth's abundance is available to everyone. It is said that the God Lugh, son of the Sun, sacrifices himself and thus strengthens the grains so that they can be harvested and then used mainly for the production of bread or to be saved for the next plantation.",
            phrase2: 'At that moment, the Sun God prepares for his death and therefore gives up all his energy so that a great harvest can be realized and so that it can bear even more fruit in Mabon. It is the ideal time to appreciate the presence of the four elements, the joys of life and abundance.',
            phrase3: "Sacrifice, in addition to being present in the God's journey, is a recurring theme in this Sabbat, since everything we desire can only be achieved through a sacrifice. Keep in mind that 'sacrifice' is not necessarily painful or painful, it is just part of the process.",
            phrase4: 'During this Sabbat, it is important that we are grateful to the abundance of the Gods and that we stop to reflect on our actions and objectives, so that we can make the necessary sacrifices and so that we know how to wait for the right moment.'
        },
        {
            sabbat: 'Mabon',
            date: 'September 21st or 22nd',
            phrase1: 'It marks the Autumn Equinox, bringing once again the energy of balance and gratitude. During this period, the Goddess reaches old age and announces that the beginning of her saddest and darkest phase, Samhain, is coming.',
            phrase2: 'On this Sabbat, the abundance of harvests is celebrated and preparations for winter begin, making it a good time to be grateful for everything that the Goddess and God have provided during the year.',
            phrase3: "The harvest will be for great banquets where the Gods will be honored. It's a time to reflect on everything that happened during the year and make plans for the future, in addition to celebrating the income generated by the second and final harvest.",
            phrase4: "And as God gave up his energies to make this abundance possible, nature follows the cycle and the green leaves begin to dry and fall. It is a warning that the God's strength and energy are running out and he will need to return to the womb of his Mother Goddess."
        }           
    ]

    return (
        <section>
            <div>
                
            </div>
        </section>
    )
}