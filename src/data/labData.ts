export interface LabExperiment {
  id: string;
  title: string;
  description: string;
  category: "math" | "sort" | "simulation" | "crypto";
  icon: string;
  code: string;
  simulatedOutput: string[];
  complexity: string;
}

export const labExperiments: LabExperiment[] = [
  {
    id: "fibonacci",
    title: "Suite de Fibonacci",
    description:
      "Génération de la suite de Fibonacci avec mémoïsation pour des performances optimales.",
    category: "math",
    icon: "🌀",
    code: `def fibonacci(n, memo={}):
    """Calcule le n-ième terme de Fibonacci avec mémoïsation."""
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]

# Génération des 12 premiers termes
sequence = [fibonacci(i) for i in range(12)]
print(f"Séquence : {sequence}")
print(f"F(30) = {fibonacci(30)}")`,
    simulatedOutput: [
      ">>> python fibonacci.py",
      "Séquence : [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]",
      "F(30) = 832040",
      "✓ Exécuté en 0.003ms (mémoïsé)",
    ],
    complexity: "O(n)",
  },
  {
    id: "bubble-sort",
    title: "Tri à Bulles",
    description:
      "Algorithme de tri classique avec comparaison et permutation d'éléments adjacents.",
    category: "sort",
    icon: "🔄",
    code: `def bubble_sort(arr):
    """Tri à bulles avec optimisation early-stop."""
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr

data = [64, 34, 25, 12, 22, 11, 90]
print(f"Avant : {data}")
print(f"Après : {bubble_sort(data.copy())}")`,
    simulatedOutput: [
      ">>> python bubble_sort.py",
      "Avant : [64, 34, 25, 12, 22, 11, 90]",
      "Après : [11, 12, 22, 25, 34, 64, 90]",
      "✓ 6 passes effectuées, 12 permutations",
    ],
    complexity: "O(n²)",
  },
  {
    id: "trajectory",
    title: "Calcul de Trajectoire",
    description:
      "Simulation de la trajectoire d'un projectile en physique balistique.",
    category: "simulation",
    icon: "🚀",
    code: `import math

def trajectory(v0, angle_deg, g=9.81, dt=0.1):
    """Simule la trajectoire d'un projectile."""
    angle = math.radians(angle_deg)
    vx = v0 * math.cos(angle)
    vy = v0 * math.sin(angle)
    x, y, t = 0, 0, 0
    max_h = 0

    while y >= 0:
        x += vx * dt
        vy -= g * dt
        y += vy * dt
        max_h = max(max_h, y)
        t += dt

    print(f"Portée : {x:.1f}m")
    print(f"Hauteur max : {max_h:.1f}m")
    print(f"Temps de vol : {t:.1f}s")

trajectory(v0=50, angle_deg=45)`,
    simulatedOutput: [
      ">>> python trajectory.py",
      "Portée : 254.8m",
      "Hauteur max : 63.7m",
      "Temps de vol : 7.2s",
      "✓ Simulation terminée (72 itérations)",
    ],
    complexity: "O(t/dt)",
  },
  {
    id: "sieve-eratosthenes",
    title: "Crible d'Ératosthène",
    description:
      "Algorithme antique pour trouver tous les nombres premiers jusqu'à un entier donné.",
    category: "math",
    icon: "🔢",
    code: `def sieve_of_eratosthenes(limit):
    """Trouve tous les nombres premiers <= limit."""
    is_prime = [True] * (limit + 1)
    is_prime[0] = is_prime[1] = False

    for i in range(2, int(limit**0.5) + 1):
        if is_prime[i]:
            for j in range(i*i, limit + 1, i):
                is_prime[j] = False

    primes = [i for i, v in enumerate(is_prime) if v]
    return primes

result = sieve_of_eratosthenes(50)
print(f"Premiers ≤ 50 : {result}")
print(f"Total : {len(result)} nombres premiers")`,
    simulatedOutput: [
      ">>> python sieve.py",
      "Premiers ≤ 50 : [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]",
      "Total : 15 nombres premiers",
      "✓ Crible terminé en 0.001ms",
    ],
    complexity: "O(n log log n)",
  },
  {
    id: "caesar-cipher",
    title: "Chiffrement de César",
    description:
      "Chiffrement par décalage alphabétique — la base de la cryptographie classique.",
    category: "crypto",
    icon: "🔐",
    code: `def caesar_encrypt(text, shift):
    """Chiffre un texte avec le chiffrement de César."""
    result = ""
    for char in text:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            result += chr((ord(char) - base + shift) % 26 + base)
        else:
            result += char
    return result

message = "Bonjour le monde"
encrypted = caesar_encrypt(message, 3)
decrypted = caesar_encrypt(encrypted, -3)
print(f"Original  : {message}")
print(f"Chiffré   : {encrypted}")
print(f"Déchiffré : {decrypted}")`,
    simulatedOutput: [
      ">>> python caesar.py",
      "Original  : Bonjour le monde",
      "Chiffré   : Erqmrxu oh prqgh",
      "Déchiffré : Bonjour le monde",
      "✓ Décalage de 3, intégrité vérifiée",
    ],
    complexity: "O(n)",
  },
];
