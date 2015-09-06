# Playground
Playground van Robin & Sander

## Uitleg GIT

### Clone
Met dit commando maak je een copietje van deze online map, naar je computer als je dit een keertje hebt gedaan hoef je het niet vaak meer te gebruiken

    git clone https://github.com/Sjamaen/Playground.git

### Status
Met dit commando zie je de status van je locale map.

    git status

Dit commando geeft een lijstje terug met bestanden die veranderd zijn. 
De rode bestanden zullen niet gecommit worden, en de groene wel. 

### Add
Met dit commando voeg je bestanden toe die gecommit kunnen worden

    git add [bestandsnaam]

Als je na dit commando `git status` uitvoert krijg je de bestanden te zien die gecommit worden (groen gekleurd).

### Commit
Met dit bestand maak je een commit dat is eigenlijk een pakketje met veranderingen en een beschrijving.

    git commit -m "Dit is de beschrijving over de wijzigen"

Alle groene bestanden die je ziet met `git status` zullen in de commit staan de rode niet. 

### Push
Met dit commando, stuur alle commits die je voorloopt naar github zodat andere er ook bij kunnen.
Met `git status` kan je ook zien hoeveel commits je voorloopt op `origin/master`

    git push

### Rm (Remove)
Met dit commando, maak je een groen gekleurd bestand weer rood. Je haalt hem dus eigenlijk uit de commit

    git rm [bestandsnaam]




