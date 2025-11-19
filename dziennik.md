Dziennik SEO - Pies Patron

Muszę zoptymalizować stronę pod SEO i śledzić jak się pojawia w Google, Bing i DuckDuckGo przez ~2.5 miesiąca.

Link do strony: https://oneofhersisters.github.io/piespatron/

---

Co już zrobiłam

2025-10-29 (Dzień 1)
- Strona jest na GitHub Pages
- Dodałam podstawowe SEO:
  - Meta tagi (tytuł, opis)
  - Open Graph (żeby ładnie wyglądało na Facebooku)
  - robots.txt i sitemap.xml
  - Poprawne HTML (h1, alt dla obrazków)

2025-11-13 (Dzień 2)
- Google Analytics - skonfigurowane, ID: G-2WPNEDFWHT
- Google Search Console - dodana strona i sitemap
- Bing Webmaster Tools - dodana strona i sitemap
- DuckDuckGo - powinno samo znaleźć (mam robots.txt)

---

Pozycje w Google

Frazy które sprawdzam:

pies patron
- Data sprawdzenia: 
- Pozycja: 
- Notatki: 

patron pies ukraina
- Data sprawdzenia: 
- Pozycja: 
- Notatki: 

pies patron saper
- Data sprawdzenia: 
- Pozycja: 
- Notatki: 

patron dog ukraine
- Data sprawdzenia: 
- Pozycja: 
- Notatki: 

---

Statystyki

Google Search Console
- Pierwsze wyniki indeksacji: 2025-10-29
- Ile stron w indeksie: 2
- Status: indeksacja rozpoczęta
- Sitemap dodany: tak (tylko w korzeniu domeny: https://oneofhersisters.github.io/sitemap_index.xml)

Bing Webmaster Tools
- Kiedy dodałam: 2025-11-13
- Status: działa
- Sitemap dodany: tak (używam project site sitemap, ale można też użyć korzeniowego)

Google Analytics
- Od kiedy śledzę: 2025-11-13
- ID: G-2WPNEDFWHT
- Użytkownicy: 
- Sesje: 
- Średni czas na stronie: 
- Odrzucenia: 

---

Notatki

2025-11-13 - Konfiguracja narzędzi SEO
- Co zrobiłam: Dodałam Google Analytics (ID: G-2WPNEDFWHT), zgłosiłam stronę do Google Search Console i Bing Webmaster Tools, dodałam sitemap do obu narzędzi
- Co się zmieniło: Strona jest teraz śledzona przez Google Analytics i zgłoszona do indeksacji w Google i Bing
- Moje wnioski: Wszystkie podstawowe narzędzia są skonfigurowane. Teraz trzeba poczekać na pierwsze dane i pozycje w wyszukiwaniu. DuckDuckGo powinno samo znaleźć stronę przez robots.txt.

2025-10-29 - Pierwsze wyniki indeksacji w Google
- Co zrobiłam: Sprawdziłam Google Search Console
- Co się zmieniło: Pojawiły się pierwsze wyniki indeksacji. 28 października była 1 strona w indeksie, teraz 2 strony (index.html i credits.html)
- Moje wnioski: Google indeksuje obie strony

2025-11-19 - Naprawa problemów z indeksacją w Bing Webmaster Tools
- Co zrobiłam: Bing zgłaszał problemy z indeksacją strony. Sprawdziłam strukturę sitemap i znalazłam kilka problemów: robots.txt wskazywał na nieprawidłowy URL sitemap (sitemap_index.xml w korzeniu domeny zamiast sitemap.xml w folderze projektu), daty w sitemap były nieaktualne. Utworzyłam prawidłowy plik sitemap.xml w folderze projektu z aktualną datą (2025-11-19), zaktualizowałam robots.txt żeby wskazywał na https://oneofhersisters.github.io/piespatron/sitemap.xml, poprawiłem daty we wszystkich plikach sitemap. Sprawdziłam dostępność plików - wszystko działa. Utworzyłam instrukcję INSTRUKCJE_BING_FIX.md z krokami do wykonania w Bing Webmaster Tools. Przeanalizowałam oficjalne wytyczne Bing Webmaster Guidelines i znalazłam, że w sekcji Hero używany był <h2> zamiast <h1> - to mogło być jedną z przyczyn problemów z indeksacją. Zmieniłam <h2> na <h1> w głównej sekcji Hero i zaktualizowałam CSS. Utworzyłam dokument BING_COMPLIANCE_CHECK.md z pełną analizą zgodności z wytycznymi Bing.
- Co się zmieniło: Teraz robots.txt wskazuje na prawidłowy sitemap.xml w folderze projektu (/piespatron/sitemap.xml), wszystkie daty są aktualne (2025-11-19), struktura XML jest poprawna. Główny sitemap.xml zawiera obie strony (index.html i credits.html) z prawidłowymi priorytetami i częstotliwością zmian. Wszystkie pliki są dostępne przez HTTP (sprawdziłam curl). Najważniejsza zmiana: główna sekcja Hero teraz używa <h1> zamiast <h2>, co jest zgodne z wytycznymi Bing dotyczącymi struktury HTML. CSS został zaktualizowany, żeby zachować te same style dla H1 w sekcji Hero.
- Moje wnioski: Bing wymaga prawidłowej struktury sitemap i aktualnych dat. Ważne jest, żeby robots.txt wskazywał na prawidłowy URL sitemap. Techniczne aspekty są poprawne, ale problem może być w ustawieniach w Bing Webmaster Tools - trzeba zaktualizować sitemap w panelu (usunąć starą, dodać nową) i wysłać URL-e do ponownej indeksacji. Bing może też potrzebować więcej czasu na indeksację niż Google. Utworzyłam szczegółową instrukcję w pliku INSTRUKCJE_BING_FIX.md. Najważniejsze odkrycie: brak H1 w głównym kontencie strony mógł być jedną z przyczyn problemów z indeksacją - Bing wyraźnie zaleca używanie H1 dla lepszego zrozumienia treści strony. Teraz strona jest w pełni zgodna z wytycznymi Bing Webmaster Guidelines.

2025-11-15 - Przeniesienie sitemap do korzenia domeny
- Co zrobiłam: Googlebot nie mógł dostać się do sitemap.xml w folderze /piespatron/ (pokazywał "Couldn't fetch"). Bing działał dobrze ze starym sitemap, ale musiałam zmienić bo Google nie mógł go znaleźć. Przeniosłam sitemap do korzenia domeny przez utworzenie user site repozytorium (oneofhersisters.github.io). Najpierw zmieniłam nazwę sitemap.xml na sitemap_index.xml, potem utworzyłam nowy repozytorium dla korzenia domeny i tam umieściłam sitemap.
- Co się zmieniło: Sitemap jest teraz dostępny pod adresem https://oneofhersisters.github.io/sitemap_index.xml. Zaktualizowałam robots.txt żeby wskazywał tylko na korzeniowy sitemap. Dodałam nowe property w Google Search Console dla korzenia domeny i dodałam tam sitemap. W property dla /piespatron/ nie dodaję sitemap - używam tylko korzeniowego. Bing działa z project site sitemap (można też użyć korzeniowego, ale project site też działa).
- Moje wnioski: Googlebot powinien teraz łatwiej znaleźć sitemap, bo jest w korzeniu domeny. Korzeniowy sitemap jest głównym - robots.txt wskazuje na niego, więc wszystkie boty go znajdą. Nie trzeba dodawać sitemap w property dla /piespatron/ - korzeniowy wystarczy. DuckDuckGo używa robots.txt który wskazuje na korzeniowy sitemap.

---

Podsumowanie na końcu (po 2.5 miesiąca)

Co zadziałało:
- 

Co nie zadziałało:
- 

Co było najlepsze:
- 

Co bym zrobiła inaczej:
- 

---

Przydatne linki
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Bing Webmaster Tools: https://www.bing.com/webmasters
