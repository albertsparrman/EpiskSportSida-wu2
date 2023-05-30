# Titel

Albert Sparrman 2023-05-30.

## Inledning

Här beskriver du kortfattat arbetets syfte/mål, arbetssätt, genomförande.

Syftet med andra delen av detta arbete var att skapa ett REST API där jag kunde skriva in matchdata som sedan skulle användas på den ursprungliga sidan. Eftersom jag saknar tillräckliga kunskaper för att på egen skapa ett API så använde jag mig av en tutorial från freecodecamp.org 

https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

När jag hade följt tutorialen handlade resterande delar av arbetet huvudsakligen om hosting och att impletera json från API:n på sidan. Jag skulle även redigera vilken json som API:n skickade ut. 

## Bakgrund
Eftersom jag redan innan vi hade fått den här uppgiften hade intentioner att fortsätta utveckla denna sida så kändes det ganska naturligt att göra ett slutprojekt som inkluderade min GUIF-sida. Vi hade i en annan tidigare använt oss av en API och jag tyckte det verkade intressant att fortsätta lära sig om ungefär de fungerande. Att skapat ett API till sidan som jag redan hade skapat verkade därför som ett bra slutprojekt.

### Planering
Länk till planeringen: https://docs.google.com/document/d/16jmU_oAsUPDOBgEd3HJLuQ_BzWT3gaJD-S4ZPsT-kc4/edit?usp=sharing

Första delen av arbetet var planeringen. Här skapades en ungefärlig tidsplan så att jag skulle veta vad jag borde ha hunnit och vad jag hade kvar att göra i projektet. Denna tidsplan följdes inte till punkt och pricka men gav mig en bra bild av ungefär hur mycket tid de olika delarna skulle ta och vad jag hade tid att genomföra. 

Att skapa ett API var huvudmålet med mitt slutprojekt och planering fick mig att inse att jag skulle behöva lägga allt krut på det för att hinna göra något som jag själv anser funkar hyfsat bra. API:n skulle enligt planeringen hantera matchfakta samt laginformation såsom lagnamn, logga, serie och eventuellt spelare i de olika lagen. 

När detta var klart skulle API:n sedan hostas så att jag kunde hämta och använda informationen på GUIF-sidan. 

Jag hade planer om att skapa en funktion för ett göra nya nyhetsinlägg om jag fick tid över, dock så hade jag inte tid att göra det då fixet kring API:n tog längre tid än vad jag trodde. 

Det fanns även en figma-skiss som visar ungefär hur den nya nyhetsfunktionen skulle visas upp på sidan.  

Figmalänk: https://www.figma.com/file/2gaANhGhqSkJkXUbAejEk9/Untitled?node-id=0-1&t=ieHhuTSZ4C5j0PWC-0 


### API
Att skapa ett API blev  hela detta projekts syfte och arbetet började med att hitta en beskrivande text som  förklarade vad som krävdes för att skapa ett REST API. Jens rekomenderade att jag sökte efter tutorials på freecodecamp.org och väl där hittade vi en tutorial som  mycket bra gick beskrev processen för att skapa ett API. 

Länk till tutorial: https://www.freecodecamp.org/news/rest-api-design-best-practices-build-a-rest-api/

När jag väl hade tutorialen framför mig så var det bara att läsa texten och koden och försöka förstå ungefär hur ett API fungerar. I det stora hela gick det bra att bara följa informationen dock så tror jag att jag hade lärt mig mer om jag låtit denna del av processen tagit mer tid. 

### Hosting

När API:n var klar var det dags att hosta och detta gjordes på glitch.com. Jag sprang in i vissa problem på vägen då jag bland annat initellt försökte hosta API:n på netlify.net fast de bara går att hosta statiska sidor där. Glitch kunde jag använda för att hosta mitt API och där var det egentligen bara ett problem som när jag väl hittade det och förstod vad det var, var relativt enkelt att lösa. När jag försökte hosta API:n på glitch så fick jag automiskt installerad en för gammal node version vilket gjorde att delar av koden inte fungerade. 

Jag tror jag fick Node version 12 när jag försökte hosta vilket gjorde att en funktion som kallas optional chaining inte fungerade i javascripten. 

Med hjälp av en forumtråd (https://support.glitch.com/t/how-to-use-optional-chanining-in-node-v14/25874) kunde jag dock lista ut hur jag skulle fixa problemet och efter det fungerade hostingen av API:n som den skulle. 

### Implettera json datan från API:n

Att lägga till datan som jag fick frpn API:n gick i det stora hela ganska bra. Jag lyckade inte få till hur man implementared bilder från json datan fast det verkade som att jag gjorde exakt som vi gjort i tidigare uppgifter, men jag måste ju ha missat något. Utöver bilderna så gick det bra att få in datan på sidan och jag fick istället i denna del av projektet fokusera mina krafter på att struktura min json så bra som jag kunde för att smidigt kunna använda datan i min kod. 

## Positiva erfarenheter

Det positiva som jag tar med mig från projektet är huvudsakligen att det känns som att jag har blivit bättre på felsökningen med problem i hostingen. Jag känner även att jag har bättre koll på hur man skriver json och sedan använder det. 

## Negativa erfarenheter

Det finns inga direkt negativa erfarenheter men det hade nog varit bra om jag spenderade lite mer tid på att verkligen förstå hur mitt API fungerade. Jag skulle också gärna ha lagt till fler features på sidan, men det var huvudsakligen av designskäl. 

## Sammanfattning

Här redovisar du dina slutsatser, erfarenheter och lärdomar. Reflektera över din produkt och dess/dina utvecklingsmöjligheter.
Vad kan vidareutvecklas och finns det utrymme att bygga vidare på projektet.

Jag har i det stora hela gjort vad jag planerade att göra och har kommit fram till en produkt som jag är delvist nöjd med. Jag känner att jag har utvecklats när det kommer till felsökningen och min förståelse av json men jag hade troligtvis kunnat förstå koden bakom mitt API bättre. Sidan går att vidareutveckla men i det stora hela är jag nöjd med resultatet av arbetet. 