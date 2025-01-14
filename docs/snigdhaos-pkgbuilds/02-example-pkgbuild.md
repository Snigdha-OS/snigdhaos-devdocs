---
sidebar_position: 1
---

# Example

A **PKGBUILD** script is a simple shell script used by Arch-based Linux distributions (such as Snigdha OS) to define how a package is built from source and installed onto the system. Below is an example of a basic **PKGBUILD** script with explanations for each part.

### **Example of a Simple PKGBUILD Script:**

```bash
# Maintainer: Your Name <youremail@example.com>
pkgname=mysoftware
pkgver=1.0
pkgrel=1
pkgdesc="A simple software example"
arch=('x86_64')
url="https://example.com/mysoftware"
license=('GPL')
depends=('glibc')
source=("https://example.com/mysoftware-${pkgver}.tar.gz")
sha256sums=('abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890')

build() {
  cd "$srcdir/mysoftware-${pkgver}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/mysoftware-${pkgver}"
  make DESTDIR="$pkgdir" install
}
```



### **Explanation of the PKGBUILD Components**

1. **pkgname**:  
   This is the name of the package you're creating. In this example, it’s set to `mysoftware`. When the package is installed, it will be referred to by this name in the system.

   ```bash
   pkgname=mysoftware
   ```

2. **pkgver**:  
   This is the version of the software you're packaging. For example, here we use `pkgver=1.0`, which refers to the first version of the software.

   ```bash
   pkgver=1.0
   ```

3. **pkgrel**:  
   This is the release number of the package. If you make changes to the PKGBUILD but don't change the software version (e.g., a patch or configuration change), you would increment this number. For this example, it's set to `pkgrel=1`.

   ```bash
   pkgrel=1
   ```

4. **pkgdesc**:  
   A short description of what the software does. In this case, we use `"A simple software example"`, but you should provide a meaningful description relevant to the software.

   ```bash
   pkgdesc="A simple software example"
   ```

5. **arch**:  
   This field specifies which architectures the package is compatible with. For most modern systems, you’ll typically see `arch=('x86_64')`, which supports 64-bit systems. Other options might include `i686` for 32-bit systems.

   ```bash
   arch=('x86_64')
   ```

6. **url**:  
   This is the website of the software. It provides users with more information about the software, updates, and support. In the example, we use `"https://example.com/mysoftware"`, but you should replace this with the actual URL of the project.

   ```bash
   url="https://example.com/mysoftware"
   ```

7. **license**:  
   The license under which the software is distributed. In this case, we use the `GPL` license. You can check the software's documentation to confirm which license applies.

   ```bash
   license=('GPL')
   ```

8. **depends**:  
   This field specifies any dependencies required by the software in order to run. For example, this software depends on `glibc` (the GNU C Library). These dependencies must be installed for the software to run correctly.

   ```bash
   depends=('glibc')
   ```

9. **source**:  
   The `source` array defines where to download the source code for the package. In this example, it points to a tarball (`tar.gz`) containing the source code of `mysoftware` at version `1.0`. The source code will be fetched from this URL when you run the `makepkg` command.

   ```bash
   source=("https://example.com/mysoftware-${pkgver}.tar.gz")
   ```

10. **sha256sums**:  
    This is a checksum (SHA256) used to verify the integrity of the downloaded source file. This ensures that the source code has not been tampered with. You can generate this checksum using the `sha256sum` command.

    ```bash
    sha256sums=('abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890')
    ```



### **Build and Package Functions**

The `PKGBUILD` defines two functions: `build()` and `package()`. These functions contain the steps to compile and install the software.

1. **build()**:  
   This function is responsible for compiling the software. Here, it does the following:
   - Changes the directory to the source code folder (`cd "$srcdir/mysoftware-${pkgver}"`).
   - Runs the `./configure` command, which prepares the build system, setting the installation prefix (`--prefix=/usr` to install to `/usr/bin`, `/usr/lib`, etc.).
   - Runs `make` to compile the source code.

   ```bash
   build() {
     cd "$srcdir/mysoftware-${pkgver}"
     ./configure --prefix=/usr
     make
   }
   ```

2. **package()**:  
   After the software is compiled, the `package()` function installs it into a staging directory (referred to as `$pkgdir`). This step essentially places the compiled software into the appropriate directories (`/usr/bin`, `/usr/lib`, etc.). It uses the `DESTDIR="$pkgdir"` option to specify the installation destination.

   ```bash
   package() {
     cd "$srcdir/mysoftware-${pkgver}"
     make DESTDIR="$pkgdir" install
   }
   ```



### **Building and Installing the Package**

Once you've created the PKGBUILD file, follow these steps to build and install the software:

1. **Run makepkg**:  
   In the same directory where the PKGBUILD is located, run the following command to build the package.

   ```bash
   makepkg
   ```

   This will:
   - Download the source code from the URL defined in the `source` array.
   - Verify the integrity of the source code using the checksum.
   - Compile the software as per the `build()` function.
   - Package the compiled software into a `.pkg.tar.zst` file.

2. **Install the package**:  
   After the package is built, use `pacman` to install the package locally. Replace `mysoftware-1.0-1.pkg.tar.zst` with the actual filename generated by `makepkg`.

   ```bash
   sudo pacman -U mysoftware-1.0-1.pkg.tar.zst
   ```



### **Conclusion**

This example demonstrates the basic structure and components of a PKGBUILD file. By understanding and modifying these fields, you can create your own PKGBUILDs for custom software or modify existing ones to suit your needs. PKGBUILDs provide a powerful way to automate the process of building, installing, and distributing software on Arch-based systems like Snigdha OS.