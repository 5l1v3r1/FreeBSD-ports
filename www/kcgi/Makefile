# $FreeBSD$

PORTNAME=	kcgi
PORTVERSION=	0.11.0
CATEGORIES=	www devel
MASTER_SITES=	http://kristaps.bsd.lv/kcgi/snapshots/

MAINTAINER=	bapt@FreeBSD.org
COMMENT=	Minimal sandboxed CGI library in C

LICENSE=	ISCL

USES=		tar:tgz

OPTIONS_DEFINE=	EXAMPLES

HAS_CONFIGURE=	yes
MAKE_ARGS=	DATADIR=${EXAMPLESDIR} INSTALL_PROGRAM="${INSTALL_PROGRAM}"
USE_RC_SUBR=	kfcgi

.include <bsd.port.mk>
