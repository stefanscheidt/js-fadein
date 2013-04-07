# Sample Project for testdriven JavaScript development #

This projects demonstrates testdriven JavaScript development, using Jasmine, Jasmine-UI and JsTestDriver.

*   Voraussetzungen:
    *   Java Development Kit 1.6 oder neuer.
    *   Apache Maven 3.0.4 oder neuer.

*   Bauen des Projekts inkl. Integrationstests: `mvn clean verify -Pintegration`.
    Dazu muss [Chrome](http://www.google.com/chrome) über den Kommandozeilen-Befehl `chrome` gestartet werden können.
    Alternativ kann man Option `-Dbrowser=<Pfad zu Chrome>` beim Aufruf des mvn-Befehls angeben, beispielsweise wie folgt für OS X:

    <pre><code>$  mvn clean install -Pintegration -Dbrowser=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome</code></pre>

*   Manuelles Ausführen der Tests via JsTestDriver (für Un*x-Systeme):
    1.   Jetty mittels `mvn jetty:run` starten.
    1.  `jstd-server.sh` ausführen
    1.   Einen Browser über die URL [http://localhost:9876](http://localhost:9876) mit JsTestDriver verbinden.
    1.   Zum Ausführen der Tests `jstd-unit.sh` bzw. `jstd-ui.sh` aufrufen.

*   Manuelles Ausführen der Tests mit Hilfe der Spec Runner:
    1.   Jetty mittels `mvn jetty:run` starten.
    1.   Zum Ausführen von Unit Tests in Chrome den [Unit Spec Runner](http://localhost:8585/js-fadein/UnitSpecRunner.html) aufrufen.
    1.   Zum Ausführen von UI Tests in Chrome den [UI Spec Runner](http://localhost:8585/js-fadein/UiSpecRunner.html) aufrufen.

*   Starten und Aufrufen der Web-App
    1.   Jetty starten mittels `mvn jetty:run`.
    1.   [Startseite](http://localhost:8585/js-fadein) der App aufrufen.
