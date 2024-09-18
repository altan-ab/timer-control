timer-control

---State Yönetimi:
-minutes ve seconds: Kullanıcının input’tan girdiği başlangıç değerlerini saklar.
-timeLeft: Geriye kalan zamanı saniye cinsinden tutar.
-isRunning: Zamanlayıcının çalışıp çalışmadığını takip eder.
-isPaused: Zamanlayıcının duraklatılıp duraklatılmadığını belirler.
-savedTime: Girilen başlangıç zamanını saklamak için kullanılan bir referans (useRef) kullanıyoruz.

---Zamanlayıcı İşleyişi:
-Zamanlayıcı, her saniyede bir güncellenir. Eğer geri sayım 0 olursa, zamanlayıcı durdurulur.
-Zamanlayıcı duraklatılabilir veya devam ettirilebilir.
-Sıfırla butonuna basıldığında, zamanlayıcı başlangıç değerlerine geri döner.
