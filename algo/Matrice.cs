using System;

namespace Matrice
{
    public class Matrice
    {
        // FIELDS
        private double[,] m_matrice; // [hauteur,largeur]
        private int m_m; // hauteur
        private int m_n; // largeur

        // PROPERTIES
        public double this[int m, int n]
        {
            get { return this.m_matrice[m, n]; }
            set { this.m_matrice[m, n] = value; }
        }

        // CONSTRUCTORS
        public Matrice(int size)
            : this(size, size)
        {
        }

        public Matrice(int m, int n)
        {
            this.m_m = m;
            this.m_n = n;

            this.m_matrice = new double[this.m_m, this.m_n];
        }

        public Matrice(Matrice source)
            : this(source.m_m, source.m_n)
        {
            for (var m = 0; m < this.m_m; m++)
            {
                for (var n = 0; n < this.m_n; n++)
                {
                    this.m_matrice[m, n] = source[m, n];
                }
            }
        }

        // METHODS
        /// <summary>
        /// Détermine si la matrice est carré.
        /// 
        /// La matrice est carré si m == n
        /// </summary>
        public bool IsSquare()
        {
            return this.m_m == this.m_n;
        }

        public void EnsureSquare()
        {
            if (!this.IsSquare())
            {
                throw new Exception(); // TODO
            }
        }

        public double GetDeterminant()
        {
            this.EnsureSquare();

            if (1 == this.m_m) return this[0, 0];
            if (2 == this.m_m) return this[0, 0]*this[1, 1] - this[0, 1]*this[1, 0];

            var result = 0.0;
            for (var m = 0; m < this.m_m; m++)
            {
                var subMatrice = Matrice.SubMatrice(this, 0, m);
                result += (0 == m%2 ? this[0, m]*subMatrice.GetDeterminant() : -1*this[0, m]*subMatrice.GetDeterminant());
            }

            return result;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>null si </returns>
        public Matrice GetInverse()
        {
            var determinant = this.GetDeterminant();
            if (Math.Abs(determinant) < Double.Epsilon) return null;

            var comatrice = Matrice.GetComatrice(this);

            return Matrice.GetTransposes(comatrice)*(1/determinant);
        }

        public static Matrice GetTransposes(Matrice matrice)
        {
            var result = new Matrice(matrice.m_n, matrice.m_m);

            for (var m = 0; m < matrice.m_m; m++)
            {
                for (var n = 0; n < matrice.m_n; n++)
                {
                    result[n, m] = matrice[m, n];
                }
            }

            return result;
        }

        public static Matrice SubMatrice(Matrice matrice, int ignoreM, int ignoreN)
        {
            var result = new Matrice(matrice.m_m - 1, matrice.m_n - 1);

            var realM = 0;
            for (var m = 0; m < matrice.m_m; m++)
            {
                var realN = 0;
                for (var n = 0; n < matrice.m_n; n++)
                {
                    if (n == ignoreN || m == ignoreM) continue;

                    result[realM, realN] = matrice[m, n];
                    realN++;
                }

                if (m == ignoreM) continue;
                realM++;
            }

            return result;
        }

        public static Matrice GetComatrice(Matrice matrice)
        {
            var result = new Matrice(matrice.m_m, matrice.m_n);
            for (var i = 0; i < matrice.m_n; i++)
            {
                for (var j = 0; j < matrice.m_n; j++)
                {
                    var subMatrice = Matrice.SubMatrice(matrice, i, j);

                    result[i, j] = subMatrice.GetDeterminant()*((i + j)%2 == 0 ? 1 : -1); 
                }
            }

            return result;
        }

        #region Operators

        public static Matrice operator *(Matrice m1, Matrice m2)
        {
            throw new NotImplementedException();
        }

        public static Matrice operator *(Matrice source, double value)
        {
            var copy = new Matrice(source);

            if (1 == value) return copy;
            for (var m = 0; m < copy.m_m; m++)
            {
                for (var n = 0; n < copy.m_n; n++)
                {
                    copy[m, n] *= value;
                }
            }

            return copy;
        }

        #endregion

        public override string ToString()
        {
            var size = 0;
            var elements = new string[this.m_m, this.m_n];

            for (var n = 0; n < this.m_n; n++)
            {
                for (var m = 0; m < this.m_m; m++)
                {
                    elements[m, n] = this[m, n].ToString();

                    size = Math.Max(elements[m, n].Length, size);
                }
            }

            Console.WriteLine($"Matrice {this.m_m}x{this.m_n}");
            for (var m = 0; m < this.m_m; m++)
            {
                Console.Write('{');
                for (var n = 0; n < this.m_n; n++)
                {
                    Console.Write(elements[m, n].PadLeft(size));

                    if (n + 1 != this.m_n) Console.Write(',');
                }
                Console.WriteLine('}');
            }

            return "";
        }
    }
}
