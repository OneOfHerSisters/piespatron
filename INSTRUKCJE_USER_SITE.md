Instrukcje - Tworzenie user site dla sitemap w korzeniu

Krok 1: Utwórz nowy repozytorium na GitHub

1. Idź na https://github.com/new
2. Nazwa repozytorium: oneofhersisters.github.io
   (WAŻNE: dokładnie taka nazwa, z kropką!)
3. Wybierz "Public"
4. NIE zaznaczaj "Add a README file"
5. Kliknij "Create repository"

---

Krok 2: Sklonuj repozytorium lokalnie

W terminalu (w innym folderze, nie w wyszukiwanie):

```bash
cd ~
git clone https://github.com/OneOfHerSisters/oneofhersisters.github.io.git
cd oneofhersisters.github.io
```

---

Krok 3: Skopiuj sitemap

Skopiuj plik sitemap_root.xml z projektu wyszukiwanie do nowego repozytorium jako sitemap_index.xml:

```bash
cp ~/develop/wyszukiwanie/sitemap_root.xml ~/oneofhersisters.github.io/sitemap_index.xml
```

Lub ręcznie:
- Otwórz sitemap_root.xml z projektu wyszukiwanie
- Skopiuj zawartość
- W nowym repozytorium utwórz plik sitemap_index.xml
- Wklej zawartość

---

Krok 4: Utwórz minimalny index.html (opcjonalnie)

Możesz utworzyć prosty index.html który przekierowuje na główną stronę:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pies Patron</title>
    <meta http-equiv="refresh" content="0; url=https://oneofhersisters.github.io/piespatron/">
</head>
<body>
    <p><a href="https://oneofhersisters.github.io/piespatron/">Przejdź do strony Pies Patron</a></p>
</body>
</html>
```

---

Krok 5: Commit i push

```bash
cd ~/oneofhersisters.github.io
git add sitemap_index.xml
git add index.html  # jeśli utworzyłeś
git commit -m "add: sitemap for piespatron project"
git push
```

---

Krok 6: Włącz GitHub Pages

1. W repozytorium oneofhersisters.github.io
2. Settings → Pages
3. Source: Deploy from a branch
4. Branch: main
5. Folder: / (root)
6. Save

---

Krok 7: Sprawdź dostępność

Poczekaj 2-5 minut, potem sprawdź w przeglądarce:
- https://oneofhersisters.github.io/sitemap_index.xml

Powinien być dostępny (zobaczysz XML z URL-ami)!

---

Krok 8: Zaktualizuj robots.txt w projekcie

W projekcie wyszukiwanie zaktualizuj robots.txt:

```
Sitemap: https://oneofhersisters.github.io/sitemap_index.xml
```

---

Krok 9: Dodaj nowe property w Google Search Console

WAŻNE: Musisz dodać OSOBNE property dla korzenia domeny!

1. W Google Search Console kliknij menu (3 kropki) → "Dodaj właściwość"
2. Wybierz "Prefiks URL"
3. Wpisz: https://oneofhersisters.github.io
   (BEZ /piespatron na końcu!)
4. Weryfikacja: wybierz metodę weryfikacji (meta tag lub plik HTML)
   - Jeśli meta tag: dodaj do index.html w user site
   - Jeśli plik HTML: utwórz plik w user site
5. Po weryfikacji dodaj sitemap:
   - Przejdź do "Mapy witryny" (Sitemaps)
   - Dodaj: https://oneofhersisters.github.io/sitemap_index.xml
   - Kliknij "Prześlij"

---

Krok 10: Zaktualizuj stare property (opcjonalnie)

W starym property (https://oneofhersisters.github.io/piespatron):
- Możesz zostawić stary sitemap lub usunąć
- Główny sitemap będzie teraz w korzeniu domeny

---

Gotowe!

Teraz sitemap będzie dostępny w korzeniu domeny i Googlebot powinien go łatwiej znaleźć.

