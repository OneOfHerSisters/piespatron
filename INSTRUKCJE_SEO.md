Instrukcje - Jak zrobić SEO i zgłosić stronę

Co już mam gotowe

1. Meta tagi - tytuł, opis, wszystko co trzeba
2. robots.txt i sitemap.xml - są w projekcie
3. Google Analytics - kod jest, tylko trzeba dodać swój ID

---

Co muszę zrobić

1. Google Analytics (żeby śledzić odwiedziny)

Jak to zrobić:
1. Idę na https://analytics.google.com/
2. Zakładam konto (jeśli nie mam)
3. Tworzę nową właściwość dla mojej strony
4. Kopiuję Measurement ID (wygląda jak G-XXXXXXXXXX)
5. W plikach index.html i credits.html znajduję:
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
6. Zamieniam G-XXXXXXXXXX na swój ID
7. Commit i push

---

2. Google Search Console (NAJWAŻNIEJSZE!)

Jak to zrobić:
1. Idę na https://search.google.com/search-console
2. Klikam "Dodaj właściwość"
3. Wybieram "Prefiks URL"
4. Wpisuję: https://oneofhersisters.github.io/piespatron
5. Weryfikacja: Meta tag już jest w kodzie! Klikam "Zweryfikuj"
6. Po weryfikacji:
   - Idę do "Mapy witryny" (Sitemaps)
   - Dodaję: https://oneofhersisters.github.io/piespatron/sitemap.xml
   - Klikam "Prześlij"
7. Idę do "Indeksowanie" → "Żądaj indeksowania" dla głównej strony

Co sprawdzać:
- Ile stron jest w indeksie (Indeksowanie → Strony)
- Jakie zapytania (Wydajność → Zapytania)
- Na jakich pozycjach jestem dla różnych fraz

---

3. Bing Webmaster Tools

Jak to zrobić:
1. Idę na https://www.bing.com/webmasters
2. Loguję się kontem Microsoft
3. Klikam "Dodaj witrynę"
4. Wpisuję: https://oneofhersisters.github.io/piespatron
5. Wybieram weryfikację (meta tag lub plik HTML)
6. Po weryfikacji:
   - Idę do "Sitemaps"
   - Dodaję: https://oneofhersisters.github.io/piespatron/sitemap.xml
7. Klikam "Prześlij"

---

4. DuckDuckGo

DuckDuckGo nie trzeba rejestrować!

DuckDuckGo samo znajdzie stronę jeśli:
- Mam robots.txt (mam)
- Mam sitemap.xml (mam)
- Strona jest publiczna (GitHub Pages)

Mogę też:
- Dodać link w stopce maila
- Udostępnić w social media
- Dodać do katalogów (jeśli wolno w zadaniu)

---

Jak sprawdzać postępy

Google Search Console
- Wydajność: ile kliknięć, wyświetleń, średnia pozycja
- Indeksowanie: ile stron w indeksie, czy są błędy
- Zapytania: na jakie frazy się pojawiam, na jakich pozycjach

Google Analytics
- Odbiorcy → Przegląd: użytkownicy, sesje, czas na stronie, odrzucenia
- Pozyskiwanie → Wszystkie źródła: skąd przychodzi ruch (Google, bezpośredni, social media)

Bing Webmaster Tools
- Podobnie jak Google Search Console

---

Dziennik (dziennik.md)

Co tydzień:
- Sprawdzam pozycje dla głównych fraz
- Notuję zmiany w Google Analytics
- Zapisuję co zmieniłam na stronie i jaki był efekt

Przykład wpisu:
2025-01-20 - Dodałam sekcję "Wzmianki w mediach"
- Co zrobiłam: Dodałam sekcję z linkami do artykułów
- Efekt: +5% ruchu z Google po tygodniu
- Wnioski: Linki zewnętrzne pomagają w SEO

---

Frazy które sprawdzam

Główne:
- pies patron
- patron pies ukraina
- pies patron saper

Angielskie:
- patron dog ukraine
- patron bomb sniffing dog
- ukraine hero dog patron

Długie:
- pies patron czernihów
- patron pies biografia
- pies patron nagrody

---

Co WOLNO a czego NIE WOLNO (FAIR)

WOLNO:
- Dawać linki do stron kolegów/koleżanek
- Podawać stronę jako źródło
- Dodać link w stopce maila
- Udostępniać w social media

NIE WOLNO:
- Kupować linków
- Używać botów do klikania
- Spamować w komentarzach
- Używać "czarnych" technik SEO

---

Co robić co tydzień

1. Sprawdzam Google Search Console
2. Sprawdzam Google Analytics
3. Sprawdzam pozycje ręcznie w Google (wpisuję frazy)
4. Aktualizuję dziennik.md
5. Sprawdzam czy sitemap.xml jest aktualny

---

Plan na 2.5 miesiąca

- Tydzień 1-2: Konfiguruję narzędzia, zgłaszam stronę
- Tydzień 3-4: Pierwsze pozycje, sprawdzam co działa
- Tydzień 5-8: Poprawiam treść, staram się być wyżej
- Tydzień 9-10: Podsumowanie, co się udało

---

Przydatne linki

- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Bing Webmaster Tools: https://www.bing.com/webmasters
- SEO Guide od Google: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
