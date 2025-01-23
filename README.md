# Ride-Out x Komoot 

## Projectdoel  
Dit project heeft als doel een interactieve website te ontwikkelen die fietsroutes van Komoot voor Ride Out toont. De website wordt weergegeven op een scherm in de winkel en biedt bezoekers de mogelijkheid om via een QR-code de routes op hun mobiele telefoon te bekijken en door te klikken naar hun gewenste route.  

## Oplevering  
Het project bestaat uit twee webpagina’s:  

### Demo scherm (1080 x 1920 px)  
- Weergave van een slideshow met verschillende fietsroutes.  
- Een QR-code waarmee bezoekers de route direct op hun telefoon kunnen openen.  
- Het ontwerp is gebaseerd op een Figma-bestand.  

### Mobiele pagina (responsive design)  
- Overzicht van beschikbare fietsroutes.  
- Mogelijkheid om routes verder te verkennen via Komoot.  
- Gebaseerd op een Figma-bestand voor consistente styling.  

## Huisstijl

<img width="205" alt="image" src="https://github.com/user-attachments/assets/c251159d-4dd6-412c-aa90-738da28c8142" />
<img width="217" alt="image" src="https://github.com/user-attachments/assets/ddbaca85-b805-4569-a8c3-9423ec87cc84" />

## Responsive designs
<img width="570" alt="image" src="https://github.com/user-attachments/assets/7bc7f911-c94a-4a45-aa4e-eb52c03d55ff" />
<img width="455" alt="image" src="https://github.com/user-attachments/assets/53ae45c2-9540-4a31-87e3-2a53cfac437c" />

## Demo scherm
We hebben de opdracht gekregen van Ride-out om een demo scherm te maken voor in de winkel, deze moest specifiek 1080x1920 zijn. 
<img width="269" alt="image" src="https://github.com/user-attachments/assets/852f2c21-b5b3-46a6-9e6d-1f7149d676f1" />

### Animatie demo scherm
De automatische slider in het demo scherm zorgt ervoor dat de fietsroutes continu worden weergegeven zonder handmatige interactie. Dit gebeurt met een oneindige animatie in CSS, waardoor de routes constant worden weergegeven. 
https://github.com/SuleymanHG/the-startup-responsive-interactive-website/blob/4dc1fc9a8b283091efa372be5350191b1f49ceb4/styles/style.css#L127-L139

## Klik interactie
Voor de online websitepagina dat we als opdracht hebben gekregen moest een soort scroll interactie in zitten voor het bekijken van de verschillende routes.

<img width="205" alt="image" src="https://github.com/user-attachments/assets/9b270169-384f-48db-be06-19c3d3d39e5a" />

## Kenmerken
### HTML
Voor de HTML heb ik gefocuts op het gebruiken van de juiste tags voor de juiste stukken info, zo heb dik dt,dd en dl gebruikt voor de informatie in onder de titels van elke slide zodat ze correct weergegeven worden, sinds ze bepaalde syukken info beschrijven.

https://github.com/SuleymanHG/the-startup-responsive-interactive-website/blob/4dc1fc9a8b283091efa372be5350191b1f49ceb4/index.html#L12-L41

### CSS
Bij de css heb ik 1 document gebruikt voor de 2 schermen, ook heb ik gebruik gemaakt van nesting. Ik heb het gebruiken van 1 css bestand voor beide pagina's kunnen doen door de html documenten classes te geven. zo kon ik met behulp van nesting alle styling van beide documenten op een nette manier op één plek houden.

https://github.com/SuleymanHG/the-startup-responsive-interactive-website/blob/4dc1fc9a8b283091efa372be5350191b1f49ceb4/styles/style.css#L67-L79
https://github.com/SuleymanHG/the-startup-responsive-interactive-website/blob/4dc1fc9a8b283091efa372be5350191b1f49ceb4/styles/style.css#L211-L223

### CSS nesting
Voor duidelijkere code heb ik gebruik gemaakt van css nesting, alle classes/tags hun media querry zit genest. Hierdoor kan je alles op één plek wijzigen en is je code makkelijker te begrijpen.
https://github.com/SuleymanHG/the-startup-responsive-interactive-website/blob/4dc1fc9a8b283091efa372be5350191b1f49ceb4/styles/style.css#L240-L253

## LINkS
[Online website](https://suleymanhg.github.io/the-startup-responsive-interactive-website/)
[Demo scherm](https://suleymanhg.github.io/the-startup-responsive-interactive-website/scherm.html)

