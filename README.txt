INTERRUTTORE VERDE / GREEN SWITCH — v8
(missioni giornaliere a rotazione, eventi speciali con punti bonus, seconda
freccia guida sullo schermo di accesso)

COSA È CAMBIATO DA v7
- La pagina "Missions" ora mostra 10 missioni al giorno su un archivio di
  250 missioni. Il set cambia automaticamente ogni giorno a mezzanotte ed
  è uguale per tutti gli utenti (dipende dalla data, non dal dispositivo).
  Ogni giorno vengono proposte 10 missioni nuove, senza sovrapposizione con
  il giorno precedente; dopo 25 giorni il ciclo delle 250 missioni ricomincia.
- Le missioni normali sono registrate come "istanze giornaliere" (missione +
  data), quindi quando il ciclo ricomincia possono essere completate di nuovo.
  Le vecchie missioni completate con le versioni precedenti restano compatibili.
- Ogni missione continua ad avere il proprio consiglio pratico (💡) subito
  sotto la descrizione. Gli eventi speciali esistenti restano attivi e possono
  aggiungere una missione bonus oltre alle 10 giornaliere.
- Aggiunti EVENTI SPECIALI, gestiti nel file app.js (cerca "specialEvents"):
  alcuni giorni fissi del calendario (es. Earth Day 22 aprile, Giornata
  mondiale dell'ambiente 5 giugno) sbloccano una SWITCH speciale con punti
  bonus, mentre la Settimana Europea della Mobilità (16-22 settembre) e ogni
  weekend raddoppiano i punti di alcune o tutte le missioni. Quando un
  evento è attivo compare un banner in Home. Le date/gli eventi si possono
  modificare direttamente nell'array "specialEvents" in cima ad app.js.
- Aggiunta una seconda freccia animata verso il basso, sotto l'avviso in
  piccolo alla fine della schermata di accesso, per rendere più evidente
  che si può/deve scorrere anche lì.

COSA È CAMBIATO DA v5
- L'APP INTERA (index.html, style.css, app.js) è ora in INGLESE: titoli,
  pulsanti, missioni, messaggi, tutto — pensata per essere usata anche dalla
  scuola partner (Erasmus+). Restano in italiano solo questo file e
  GUIDA_FIREBASE.txt, che servono a chi gestisce il progetto, non agli
  studenti.
- Al momento dell'iscrizione ogni studente sceglie anche una PASSWORD
  (minimo 4 caratteri), oltre a nome, cognome, classe e scuola. Serve a
  evitare che un compagno sullo stesso dispositivo condiviso possa aprire
  o modificare il profilo di qualcun altro semplicemente scrivendo lo
  stesso nome.
  - La password viene salvata SOLO sul dispositivo (mai su Firebase, che
    nel piano gratuito è leggibile da chiunque conosca l'indirizzo — vedi
    GUIDA_FIREBASE.txt). Viene inoltre salvata come "hash" (una versione
    codificata) e non in chiaro.
  - NON esiste un vero recupero password (non c'è un server che gestisce
    gli account): se uno studente la dimentica, può usare il link "Forgot
    your password?" nel modulo di accesso, ma questo azzera punti, switch
    e badge di quel profilo su quel dispositivo, così può reiscriversi da
    capo con una password nuova. Vale la pena avvisare gli studenti di
    annotarsi la password da qualche parte.
  - I profili creati con versioni precedenti dell'app (senza password) non
    vengono bloccati: al primo accesso dopo l'aggiornamento, qualsiasi
    password inserita viene accettata e impostata per quel profilo da quel
    momento in poi.

COSA C'ERA GIÀ (da v4/v5/v7)
- Freccia animata verso il basso sulla schermata di accesso, per indicare
  dove compilare i campi (visibile su telefono e PC).
- Sulla Parete si possono caricare anche brevi video, non solo foto (max
  20MB a file).
- Riquadro "Your impact, made visible" in Home con una stima (dichiarata
  come indicativa) di CO2 risparmiata e bottiglie di plastica evitate,
  più un pulsante per condividere il proprio impatto.
- Ogni missione mostra anche un consiglio pratico su come completarla.

COME PUBBLICARLA
1. Sostituisci index.html, style.css e app.js nel tuo repository GitHub
   (michelepalazzo05-lab.github.io/greenswitch/) con questi tre file.
2. Se non l'hai già fatto, segui GUIDA_FIREBASE.txt per collegare il database
   gratuito e avere la classifica vera (va fatto una volta sola).
3. Aspetta 1-2 minuti che GitHub Pages ripubblichi, poi ricarica con
   Ctrl+Shift+R per svuotare la cache del browser.

NOTA IMPORTANTE: la password protegge solo da compagni curiosi sullo stesso
dispositivo — non è una sicurezza vera e propria (l'app non ha un server,
quindi non può verificare l'identità in modo robusto). Va bene per un
prototipo scolastico, non per dati sensibili.
