from setuptools import find_packages, setup

setup(
    name="sschwein_website_37",
    version="1.0.0",
    url="http://sschwein.com/",
    license="BSD",
    maintainer="Steven Schweinhart",
    maintainer_email="steven.a.schweinhart@gmail.com",
    description="Redesign of sschwein.com in Python 3.7 using Flask.",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=["flask"],
    extras_require={"test": ["pytest", "coverage"]},
)
